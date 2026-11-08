import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center select-none bg-[#060608] text-[#f5f5f7]">
      <div className="space-y-4 max-w-md">
        <span className="text-xs font-mono tracking-[0.28em] uppercase text-silver-500">
          Error 404 &bull; Index Not Found
        </span>
        <h1 className="text-4xl sm:text-5xl font-extralight tracking-tight text-white">
          Coordinates <br />
          <span className="font-normal text-silver-400">Uncharted.</span>
        </h1>
        <p className="text-sm text-silver-400 font-light leading-relaxed">
          The requested architectural specification does not exist or has been archived.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/[0.05] text-xs font-mono tracking-wider text-silver-100 hover:text-white hover:border-white/40 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

