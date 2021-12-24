import { useRef, useEffect } from 'react';
import { AiOutlineQuestionCircle, AiOutlineEnter } from "react-icons/ai";

export const Form = ({ activeSection, myIdea, setMyIdea, setActiveSection }) => {

	const formRef = useRef(null)

	let style =
		"h-screen w-full pt-32 bg-green absolute transform transition duration-500 ease-in-out overflow-y-auto lg:overflow-y-hidden";
	if (activeSection === 10) {
		style = style + " translate-y-0";
	} else {
		style = style + " translate-y-full";
	}

	useEffect(() => {
			formRef.current.addEventListener("keyup", (e) => {
				if (e.key === 'Enter' && myIdea.trim().length > 0) {
					setActiveSection(11)
				}
			});
	}, [formRef, myIdea])

	return (
		<div className={style}>
			<div className="flex flex-col text-center pb-10">
				<div className="lg:pt-14 space-y-10">
					<p className="text-secondary text-3xl lg:text-6xl font-extrabold tracking-tighter">
						How are you Society ?
					</p>
					<div className="flex flex-col lg:flex-row justify-center space-x-5 font-spacegr text-sm lg:text-base">
						<span className="text-secondary">
							Share what you would do on Society.
						</span>
						<span className="text-orange flex items-center gap-2 justify-center">
							<AiOutlineQuestionCircle />
							<p>Read Stories</p></span>
					</div>
				</div>
				<div className="w-full flex flex-col items-center mt-14 lg:mt-14 space-y-10">
					<textarea
						ref={formRef}
						value={myIdea}
						onChange={(event) => setMyIdea(event.target.value)}
						className="border-8 border-orange bg-green w-4/5 lg:w-2/5  h-64 lg:h-64 text-pink text-xl lg:text-5xl" />
					<span className="flex items-center gap-2 text-muted">
						<AiOutlineEnter />
						<p className="font-spacegr text-sm lg:text-base">Press enter when done</p>
					</span>
				</div>
			</div>
		</div>
	);
};
