import cron from "node-cron";
import User from "@/app/Schemas/UserSchema";
import { connectDatabase } from "@/config/db";

console.log("Starting cron job... [CRON.ts]");

export function startCronJob() {
  cron.schedule("*/5 * * * *", async () => {
    try {
      await connectDatabase();
      const now = new Date();
      const result = await User.deleteMany({ otp_expires_at: { $lt: now }, is_verified: false });
      console.log(`🗑️ Deleted ${result.deletedCount} expired OTP records`);
    } catch (error) {
      console.error("❌ Cron job error:", error);
    }
  });
}
