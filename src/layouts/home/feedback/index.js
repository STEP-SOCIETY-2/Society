import Focus from "../../../static/arts/focus.png";
import GoodFeedback from "../../../static/arts/feedback.png";
export const Feedback = ({ activeSection }) => {
	let style =
		"h-screen w-full text-green absolute transform transition duration-500 ease-in-out overflow-y-auto lg:overflow-y-hidden";
	if (activeSection === 3) {
		style = style + " translate-y-0";
	} else {
		style = style + " translate-y-full";
	}
	return (
		<div className={style}>
			<div className="grid lg:grid-cols-2 text-center h-full">
				<div className="bg-yellow  bg-opacity-20 lg:pt-32 pt-14 px-14">
					<div className="pt-10 items-center justify-center h-full space-y-5 lg:space-y-5 flex flex-col">
						<p className="font-semibold text-lg lg:text-3xl leading-tight">
						Leave good feedback - Be kind							
						</p>
						<div className="flex flex-col font-spacegr text-xs lg:text-lg pb-5">
							<p className="text-center">
							Your insights are the magic sauce that help
								ideas thrive.
							</p>
							<p className="text-center">
							Share away. They're counting on it.
							</p>
						</div>
						<div className="px-5 pb-5">
							<img src={GoodFeedback} className=" max-h-80" />
						</div>
					</div>
				</div>
				<div className="h-full lg:pt-32 px-14">
					<div className="pt-5 lg:pt-10 items-center justify-center h-full space-y-5 lg:space-y-5 flex flex-col">
						<p className="font-semibold text-lg lg:text-3xl leading-tight">
						Reflect on what you create - Focus							
						</p>
						<div className="flex flex-col items-center font-spacegr text-xs lg:text-lg pb-5">
							<p className="text-center">
							Like seeds, ideas need room alone to evolve.
							</p>
							<p className="text-center">
							Reflect on the journey and take next steps. At
								your time and pace.
							</p>
						</div>
						<div className="px-5 pb-5">
							<img src={Focus} className="max-h-80" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
