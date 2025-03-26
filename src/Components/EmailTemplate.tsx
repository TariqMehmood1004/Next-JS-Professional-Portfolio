import React from 'react'
import { Section, Row, Column, Img, Link, Text, CodeInline } from "@react-email/components";

const EmailTemplate = ({ email = "johnbrrighte@gmail.com", otp = "123456", expiresAt = new Date().toLocaleTimeString() }) => {
    return (
        <div className="bg-gray-100 md:w-3xl container max-auto rounded-lg p-8 font-sans flex flex-col gap-8">
            {/* HEADER */}
            <Section className="my-2 px-[32px] py-2">
                <Row>
                    <Column align="center">
                        <Img
                            alt="SyntaxilitY"
                            height="60"
                            width="60"
                            className='rounded-full'
                            src="/tariq-mehmood/Tariq Mehmood.jpg"
                        />
                    </Column>
                </Row>
                <Row>
                    <Column align="center">
                        <Text className="text-[30px] font-semibold text-gray-900">
                            Tariq Mehmood
                        </Text>
                    </Column>
                </Row>
            </Section>

            {/* BODY */}
            <section className="py-2">
                <Text className="text-left">
                    <Row>
                        <Text className="text-[24px] font-semibold text-gray-900">
                            Hello, {email}
                        </Text>
                    </Row>
                    <Row>
                        <Text className="text-left">
                            Use the below code as your One-Time Password (OTP) for verification
                        </Text>
                    </Row>
                    <Row className="text-center">
                        {' '}
                        <CodeInline className="rounded-[6px] bg-gray-300 px-4 py-2 text-gray-900 font-semibold text-[24px]">
                            {otp}
                        </CodeInline>
                        {' '}
                    </Row>
                    <Text className="text-left">
                        This OTP will expire at: <b>{expiresAt}</b>
                    </Text>
                    <Text className="text-left">
                        If you did not request this, please ignore this email.
                    </Text>
                </Text>
            </section>

            {/* FOOTER */}
            <Section>
                <Row>
                    <Column colSpan={4}>
                        <Img
                            alt="SyntaxilitY"
                            height="60"
                            width="60"
                            className='rounded-full'
                            src="/tariq-mehmood/Tariq Mehmood.jpg"
                        />
                        <Text className="my-[8px] text-[16px] font-semibold leading-[24px] text-gray-900">
                            SyntaxilitY Inc.
                        </Text>
                        <Text className="mb-[0px] mt-[4px] text-[16px] leading-[24px] text-gray-500">
                            We are a team of passionate developers building the best email templates for your business.
                        </Text>
                    </Column>
                    <Column align="left" className="table-cell align-bottom">
                        <Row className="table-cell h-[44px] w-[56px] align-bottom">
                            <Column className="pr-[8px]">
                                <Link href="#">
                                    <Img
                                        alt="Facebook"
                                        height="36"
                                        src="https://react.email/static/facebook-logo.png"
                                        width="36"
                                    />
                                </Link>
                            </Column>
                            <Column className="pr-[8px]">
                                <Link href="#">
                                    <Img alt="X" height="36" src="https://react.email/static/x-logo.png" width="36" />
                                </Link>
                            </Column>
                            <Column>
                                <Link href="#">
                                    <Img
                                        alt="Instagram"
                                        height="36"
                                        src="https://react.email/static/instagram-logo.png"
                                        width="36"
                                    />
                                </Link>
                            </Column>
                        </Row>
                        <Row>
                            <Text className="my-[8px] text-[16px] font-semibold leading-[24px] text-gray-500">
                                Johar Town J2 Block, UMT Rd Lahore, Pakistan
                            </Text>
                            <Text className="mb-[0px] mt-[4px] text-[16px] font-semibold leading-[24px] text-gray-500">
                                johnbrrighte@engineer.com +923264848783
                            </Text>
                        </Row>
                    </Column>
                </Row>
            </Section>
        </div>
    )
}

export default EmailTemplate