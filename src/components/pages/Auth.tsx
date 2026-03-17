import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMail, AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { GiOyster } from "react-icons/gi";

type Screen = "login" | "register" | "register-otp" | "forgot-email" | "forgot-otp" | "new-password" | "success";

const slideVariants = {
  enterFromRight: { x: 60, opacity: 0 },
  enterFromLeft:  { x: -60, opacity: 0 },
  center:         { x: 0, opacity: 1 },
  exitToLeft:     { x: -60, opacity: 0 },
  exitToRight:    { x: 60, opacity: 0 },
};

function Field({
  label, type = "text", placeholder, icon, rightEl,
}: {
  label: string; type?: string; placeholder: string;
  icon: React.ReactNode; rightEl?: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-[11px] tracking-[0.12em] uppercase font-semibold text-gray-400">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300">{icon}</span>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2.5 rounded-lg text-[14px] text-gray-800 placeholder:text-gray-300 outline-none transition-all duration-200"
          style={{ border: "1px solid #d3d3d3", background: "#fafafa" }}
          onFocus={e => { e.target.style.borderColor = "#1ca7a6"; e.target.style.boxShadow = "0 0 0 3px rgba(28,167,166,0.12)"; }}
          onBlur={e => { e.target.style.borderColor = "#d3d3d3"; e.target.style.boxShadow = "none"; }}
        />
        {rightEl && <span className="absolute right-3.5 top-1/2 -translate-y-1/2">{rightEl}</span>}
      </div>
    </div>
  );
}

function OtpInput({ onComplete }: { onComplete: (code: string) => void }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handle = (i: number, val: string) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[i] = val;
    setOtp(next);
    if (val && i < 5) {
      document.getElementById(`otp-${i + 1}`)?.focus();
    }
    if (next.every(v => v !== "")) onComplete(next.join(""));
  };

  const handleKey = (i: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[i] && i > 0) {
      document.getElementById(`otp-${i - 1}`)?.focus();
    }
  };

  return (
    <div className="flex gap-2 justify-center">
      {otp.map((v, i) => (
        <input
          key={i}
          id={`otp-${i}`}
          value={v}
          maxLength={1}
          onChange={e => handle(i, e.target.value)}
          onKeyDown={e => handleKey(i, e)}
          className="w-11 h-12 text-center text-[18px] font-bold rounded-lg outline-none transition-all duration-200"
          style={{
            border: v ? "2px solid #1ca7a6" : "1.5px solid #d3d3d3",
            background: v ? "#f0fafa" : "#fafafa",
            color: "#1ca7a6",
            boxShadow: v ? "0 0 0 3px rgba(28,167,166,0.1)" : "none",
          }}
          onFocus={e => { e.target.style.borderColor = "#1ca7a6"; e.target.style.boxShadow = "0 0 0 3px rgba(28,167,166,0.12)"; }}
          onBlur={e => {
            if (!v) { e.target.style.borderColor = "#d3d3d3"; e.target.style.boxShadow = "none"; }
          }}
        />
      ))}
    </div>
  );
}

export default function AuthPage() {
  const [screen, setScreen] = useState<Screen>("login");
  const [prevScreen, setPrevScreen] = useState<Screen>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const goTo = (s: Screen) => {
    setPrevScreen(screen);
    setScreen(s);
  };

  // Determine slide direction
  const order: Screen[] = ["login", "register", "register-otp", "forgot-email", "forgot-otp", "new-password", "success"];
  const direction = order.indexOf(screen) >= order.indexOf(prevScreen) ? "right" : "left";

  const EyeToggle = ({ show, toggle }: { show: boolean; toggle: () => void }) => (
    <button type="button" onClick={toggle} className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
      {show ? <AiOutlineEyeInvisible size={17} /> : <AiOutlineEye size={17} />}
    </button>
  );

  const screens: Record<Screen, React.ReactNode> = {
    login: (
      <div className="space-y-5">
        <div className="mb-6">
          <h2 className="salsify text-[36px] text-gray-800 leading-none">Welcome Back</h2>
          <p className="text-[13px] text-gray-400 mt-1">Log in to browse fresh seafood products.</p>
        </div>

        <Field label="Email" type="email" placeholder="you@email.com" icon={<AiOutlineMail size={16} />} />
        <Field
          label="Password" type={showPassword ? "text" : "password"} placeholder="Enter password"
          icon={<AiOutlineLock size={16} />}
          rightEl={<EyeToggle show={showPassword} toggle={() => setShowPassword(v => !v)} />}
        />

        <div className="text-right">
          <button type="button" onClick={() => goTo("forgot-email")}
            className="text-[12px] font-semibold transition-colors cursor-pointer"
            style={{ color: "#1ca7a6" }}>
            Forgot password?
          </button>
        </div>

        <button className="btn w-full py-3 text-center rounded-lg text-[13px] tracking-wide uppercase font-semibold">
          Login
        </button>

        <p className="text-center text-[13px] text-gray-400">
          Don't have an account?{" "}
          <button onClick={() => goTo("register")} className="font-semibold underline underline-offset-2 cursor-pointer"
            style={{ color: "#FF6B5A" }}>
            Register
          </button>
        </p>
      </div>
    ),

    register: (
      <div className="space-y-4">
        <div className="mb-6">
          <h2 className="salsify text-[36px] text-gray-800 leading-none">Create Account</h2>
          <p className="text-[13px] text-gray-400 mt-1">Fresh seafood, easy ordering — register now!</p>
        </div>

        <Field label="Full Name" placeholder="John Doe" icon={<AiOutlineUser size={16} />} />
        <Field label="Email" type="email" placeholder="you@email.com" icon={<AiOutlineMail size={16} />} />
        <Field
          label="Password" type={showPassword ? "text" : "password"} placeholder="Create password"
          icon={<AiOutlineLock size={16} />}
          rightEl={<EyeToggle show={showPassword} toggle={() => setShowPassword(v => !v)} />}
        />

        <button
          onClick={() => goTo("register-otp")}
          className="btn w-full py-3 text-center rounded-lg text-[13px] tracking-wide uppercase font-semibold mt-2">
          Create Account
        </button>

        <p className="text-center text-[13px] text-gray-400">
          Already have an account?{" "}
          <button onClick={() => goTo("login")} className="font-semibold underline underline-offset-2 cursor-pointer"
            style={{ color: "#FF6B5A" }}>
            Login
          </button>
        </p>
      </div>
    ),

    "register-otp": (
      <div className="space-y-6">
        <div className="mb-2">
          <h2 className="salsify text-[36px] text-gray-800 leading-none">Verify Email</h2>
          <p className="text-[13px] text-gray-400 mt-1">We sent a 6-digit code to your email. Enter it below.</p>
        </div>

        <div
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-[13px]"
          style={{ background: "#f0fafa", border: "1px solid #c8e8e8", color: "#1ca7a6" }}
        >
          <AiOutlineMail size={16} />
          <span>Code sent to <strong>you@email.com</strong></span>
        </div>

        <OtpInput onComplete={() => {}} />

        <button
          onClick={() => goTo("success")}
          className="btn w-full py-3 text-center rounded-lg text-[13px] tracking-wide uppercase font-semibold">
          Verify & Register
        </button>

        <p className="text-center text-[13px] text-gray-400">
          Didn't receive it?{" "}
          <button className="font-semibold underline underline-offset-2 cursor-pointer" style={{ color: "#1ca7a6" }}>
            Resend Code
          </button>
        </p>

        <button onClick={() => goTo("register")} className="flex items-center gap-1 text-[12px] text-gray-400 hover:text-gray-600 transition-colors cursor-pointer mx-auto">
          ← Back
        </button>
      </div>
    ),

    "forgot-email": (
      <div className="space-y-5">
        <div className="mb-2">
          <h2 className="salsify text-[36px] text-gray-800 leading-none">Forgot Password</h2>
          <p className="text-[13px] text-gray-400 mt-1">Enter your email and we'll send you a reset code.</p>
        </div>

        <Field label="Email Address" type="email" placeholder="you@email.com" icon={<AiOutlineMail size={16} />} />

        <button
          onClick={() => goTo("forgot-otp")}
          className="btn w-full py-3 text-center rounded-lg text-[13px] tracking-wide uppercase font-semibold">
          Send Reset Code
        </button>

        <button onClick={() => goTo("login")} className="flex items-center gap-1 text-[12px] text-gray-400 hover:text-gray-600 transition-colors cursor-pointer mx-auto">
          ← Back to Login
        </button>
      </div>
    ),

    "forgot-otp": (
      <div className="space-y-6">
        <div className="mb-2">
          <h2 className="salsify text-[36px] text-gray-800 leading-none">Enter Code</h2>
          <p className="text-[13px] text-gray-400 mt-1">Check your inbox for a 6-digit reset code.</p>
        </div>

        <div
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-[13px]"
          style={{ background: "#f0fafa", border: "1px solid #c8e8e8", color: "#1ca7a6" }}
        >
          <AiOutlineMail size={16} />
          <span>Code sent to <strong>you@email.com</strong></span>
        </div>

        <OtpInput onComplete={() => {}} />

        <button
          onClick={() => goTo("new-password")}
          className="btn w-full py-3 text-center rounded-lg text-[13px] tracking-wide uppercase font-semibold">
          Verify Code
        </button>

        <p className="text-center text-[13px] text-gray-400">
          Didn't receive it?{" "}
          <button className="font-semibold underline underline-offset-2 cursor-pointer" style={{ color: "#1ca7a6" }}>
            Resend Code
          </button>
        </p>

        <button onClick={() => goTo("forgot-email")} className="flex items-center gap-1 text-[12px] text-gray-400 hover:text-gray-600 transition-colors cursor-pointer mx-auto">
          ← Back
        </button>
      </div>
    ),

    "new-password": (
      <div className="space-y-5">
        <div className="mb-2">
          <h2 className="salsify text-[36px] text-gray-800 leading-none">New Password</h2>
          <p className="text-[13px] text-gray-400 mt-1">Choose a strong password for your account.</p>
        </div>

        <Field
          label="New Password" type={showNewPassword ? "text" : "password"} placeholder="Enter new password"
          icon={<AiOutlineLock size={16} />}
          rightEl={<EyeToggle show={showNewPassword} toggle={() => setShowNewPassword(v => !v)} />}
        />
        <Field
          label="Confirm Password" type={showConfirmPassword ? "text" : "password"} placeholder="Confirm new password"
          icon={<AiOutlineLock size={16} />}
          rightEl={<EyeToggle show={showConfirmPassword} toggle={() => setShowConfirmPassword(v => !v)} />}
        />

        <button
          onClick={() => goTo("success")}
          className="btn w-full py-3 text-center rounded-lg text-[13px] tracking-wide uppercase font-semibold">
          Reset Password
        </button>
      </div>
    ),

    success: (
      <div className="flex flex-col items-center text-center space-y-5 py-6">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center shadow-sm"
          style={{ background: "#f0fafa", border: "2px solid #1ca7a6" }}
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1ca7a6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div>
          <h2 className="salsify text-[36px] text-gray-800 leading-none">
            {prevScreen === "register-otp" ? "Account Created!" : "Password Reset!"}
          </h2>
          <p className="text-[13px] text-gray-400 mt-2">
            {prevScreen === "register-otp"
              ? "Your account is ready. Welcome to SeaFresh!"
              : "Your password has been updated successfully."}
          </p>
        </div>

        <button
          onClick={() => goTo("login")}
          className="btn px-10 py-3 rounded-lg text-[13px] tracking-wide uppercase font-semibold">
          Go to Login
        </button>
      </div>
    ),
  };

  return (
    <div className="flex items-stretch h-[89vh]">
      {/* Left image panel */}
      <div className="w-full flex-1 hidden lg:block relative overflow-hidden">
        <img src="/auth.jpg" alt="auth" className="w-full h-full object-cover" />
        {/* Overlay */}
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
        {/* Brand badge */}
        <div className="absolute bottom-12 left-10 text-white">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.3)" }}
            >
              <GiOyster size={20} style={{ color: "white" }} />
            </div>
            <span className="salsify text-[26px] leading-none tracking-wide">SeaFresh</span>
          </div>
          <p className="text-[13px] text-white/60 tracking-wide max-w-[220px]">
            Premium seafood delivered fresh to your door.
          </p>
        </div>
      </div>

      {/* Right form panel */}
      <div className="w-full flex-1 flex items-center justify-center px-6 py-12 bg-white">
        <div className="w-full max-w-[400px]">

          {/* Step indicator */}
          <div className="flex items-center gap-2 mb-8">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "#f0fafa", border: "1.5px solid #1ca7a6" }}
            >
              <GiOyster size={16} style={{ color: "#1ca7a6" }} />
            </div>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, #c8e8e8, transparent)" }} />
          </div>

          {/* Animated screen */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={screen}
                initial={direction === "right" ? slideVariants.enterFromRight : slideVariants.enterFromLeft}
                animate={slideVariants.center}
                exit={direction === "right" ? slideVariants.exitToLeft : slideVariants.exitToRight}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {screens[screen]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}