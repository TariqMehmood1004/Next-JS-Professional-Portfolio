const generateOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    const otpExpiresAt = new Date();
    otpExpiresAt.setMinutes(otpExpiresAt.getMinutes() + 5);
    return { otp, otpExpiresAt };
}

export default generateOtp;
