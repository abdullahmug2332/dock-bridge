import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-[89vh] ">
      <div className="w-full flex-1 hidden lg:block">
        <img
          src="/auth.jpg"
          alt="auth"
          className="w-full h-[89vh] object-cover "
        />
      </div>
      <div className="w-full flex-1">
        <div className="w-[80%] mx-auto ">
          <Tabs defaultValue="login" className="w-full flex flex-col">
            {/* LOGIN */}
            <TabsContent value="login">
              {/* Header */}
              <div className="text-start mb-8">
                <h2 className="text-4xl font-semibold salsify">Welcome </h2>
                <p className="p text-[15px]!">
                  Log in to your account to browse fresh seafood products.
                </p>
              </div>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="Enter your email" />
                </div>

                <div className="space-y-2 relative">
                  <Label>Password</Label>

                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-9 text-gray-500 text-sm"
                  ></button>
                </div>

                <div className="text-right text-sm">
                  <a href="#" className="text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>

                <Button className="w-full">Login</Button>
                {/* Tabs */}
                <TabsList className="w-full flex justify-center">
                  <div className="flex items-center gap-1">
                    <p className="p text-[15px]!">Don't have an account?</p>

                    <TabsTrigger
                      value="register"
                      className="px-0 underline color2 cursor-pointer"
                    >
                      Register
                    </TabsTrigger>
                  </div>
                </TabsList>
              </form>
            </TabsContent>

            {/* REGISTER */}
            <TabsContent value="register">
                {/* Header */}
              <div className="text-start mb-8">
                <h2 className="text-4xl font-semibold salsify">Register </h2>
                <p className="p text-[15px]!">
                  Fresh seafood, easy ordering—register now to get started!
                </p>
              </div>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label>Name</Label>
                  <Input placeholder="Enter your name" />
                </div>

                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="Enter your email" />
                </div>

                <div className="space-y-2 relative">
                  <Label>Password</Label>

                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create password"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-9 text-gray-500 text-sm"
                  ></button>
                </div>
                <Button className="w-full">Create Account</Button>
                <TabsList className="w-full flex justify-center">
                  <div className="flex items-center gap-1">
                    <p className="p text-[15px]!">Already have an account?</p>

                    <TabsTrigger
                      value="login"
                      className="px-0 underline color2 cursor-pointer"
                    >
                      Login
                    </TabsTrigger>
                  </div>
                </TabsList>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
