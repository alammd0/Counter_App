/** @format */
import React from "react";
import { useState } from "react";
import { MdAdd } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";

function Buttom() {
	const [count, setCount] = useState(0);

	function incrementHandler() {
		// console.log("clicked me");
		setCount(count + 1);
	}

	function descHandler() {
		// console.log("TOgether me clicked");
		setCount(count - 1);
	}

	const restHandler = () => {
		setCount(0);
	};

	return (
		<div className="flex flex-col items-center justify-center w-[100vw] h-[100vh] gap-3 bg-[#A14EBF]">
            <h1 className="text-xl font-bold  text-[#131D2A]">Counter App</h1>
			<div className="flex flex-row justify-center py-4 text-[18px] text-[#7adce4] bg-[#3E1B4B] gap-10 rounded-md mx-9 px-5">
				<button className="border-r-2 px-3 " onClick={incrementHandler}>
					<MdAdd />
				</button>

				<button className="text-white text-xl">{count}</button>

				<button className="border-l-2 px-3" onClick={descHandler}>
					<RiSubtractFill />
				</button>
			</div>

			<div className="py-3 bg-[#2C4563]  px-4 rounded-md">
				<button className="text-[#94DBCB] text-xl" onClick={restHandler}>
					Reset
				</button>
			</div>
		</div>
	);
}

export default Buttom;
