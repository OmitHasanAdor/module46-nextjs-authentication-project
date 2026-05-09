'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";


const SignInPage = () => {
       const router = useRouter()

    // react hook form 
    const {register,handleSubmit,watch, formState: { errors }}=useForm()
    const handleSignIn=async(data)=>{
console.log(data)
const { data:res, error } = await authClient.signIn.email({

    email: data.email,
    password: data.password,
    rememberMe: true,
    callbackUrl: "/"
});
console.log(res, error)
if (error) {
    alert(error.message)
} else if (res) {
    alert("Sign in successful!")
        router.push("/")
}
    }
//     console.log(watch('email'))
// console.log(watch('password'))
    return (
        <div className="">
            <div className=" bg-white min-h-[80vh] max-w-125 mx-auto rounded-md shadow-md border-2 border-gray-200">
                <h1 className="text-2xl font-bold text-center py-8 border-b-2 border-gray-300">Sign In Your Account</h1>

                <div className=" flex flex-col justify-center items-center py-8">
                    <form onSubmit={handleSubmit(handleSignIn)}>
                        <fieldset className="fieldset   rounded-box w-xs  p-4">
                            <legend className="fieldset-legend">Sign In</legend>

                            <label className="label">Email</label>
                            <input type="email" {...register("email",{ required: 'email field is required' })} className="input" placeholder="Email" />
                             {errors.email && <p className=" text-red-500">{errors.email.message}</p>}

                            <label className="label">Password</label>
                            <input type="password" {...register("password",{ required: 'password field must required' })} className="input" placeholder="Password" />
                            {errors.password && <p className=" text-red-500">{errors.password.message}</p>}

                            <button className="btn btn-neutral mt-4">Sign In</button>
                        </fieldset>
                    </form>
                    <p className=" text-center font-semibold">Don&apos;t have an account? <Link href="/signup" className="text-blue-500 hover:underline">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;