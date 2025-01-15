"use client"
import { useState } from "react";
import ImgLogo from '../../../public/image/logo.png';
import InputField from "./components/InputField";
import Image from "next/image";


export default function NotAbleArea() {

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    return (
        <>
            <div className="w-[100vw] h-[100vh] bg-[#b5e7d6]">
                <div>
                <Image src={ImgLogo} width={160} height={63} alt="logo" />
                </div>
                <div className="flex justify-center">
                    <div className="max-w-[720px] flex flex-col gap-[32px]">
                        <div className="text-[24px] text-gray-900">
                            We are currently not available in your area, but we are working on being there soon. Sign up for our waitlist to be notified when we are available.This question is required.*
                        </div>
                        <div className="flex flex-col gap-[50px]">
                            <InputField
                                id="firstName"
                                type="text"
                                label="First name"
                                isRequired
                                placeholder="Jane"
                                value={firstName}
                                onChange={setFirstName}
                            />
                            <InputField
                                id="lastName"
                                type="text"
                                label="Last name"
                                isRequired
                                placeholder="Smith"
                                value={lastName}
                                onChange={setLastName}
                            />
                            <InputField
                                id="firstName"
                                type="email"
                                label="Email"
                                isRequired
                                placeholder="name@example.com"
                                value={email}
                                onChange={setEmail}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}