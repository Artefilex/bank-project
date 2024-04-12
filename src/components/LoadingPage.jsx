
import { CgSpinnerTwoAlt } from "react-icons/cg";
function Loading() {
  return<div className="flex flex-col items-center justify-center w-full min-h-screen  overflow-hidden text-slate-800 bg-slate-100">

     <CgSpinnerTwoAlt  className="animate-spin w-[4rem] h-[4rem] mobile:w-[8rem] mobile:h-[8rem]" />
     <div className="animate-pulse font-bold mobile:text-[2rem]"> Loading  </div>
</div>;
}

export default Loading;
