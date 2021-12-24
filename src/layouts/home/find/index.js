import HighFive from "../../../static/arts/high-five.png";
import Experiment from "../../../static/arts/experiment.png";
import FindMobile from "../../../static/arts/mobile/find.png"
import ExperimentMobile from "../../../static/arts/mobile/experiment.png"

export const Find = ({ activeSection }) => {
	let style =
		"h-screen w-full absolute transform transition duration-500 ease-in-out overflow-y-auto lg:overflow-y-hidden";
	if (activeSection === 2) {
		style = style + " translate-y-0";
	} else {
		style = style + " translate-y-full";
	}
	return (
		<div className={style}>
			<div className="grid lg:grid-cols-2 text-center h-full">
				<div className="bg-arch bg-opacity-20 lg:pt-32 pt-14 px-14">
					<div className="pt-10 items-center justify-center h-full space-y-5 lg:space-y-5 flex flex-col">
						<p className="font-semibold text-lg lg:text-3xl leading-tight">
						Find community - Help each other
							
						</p>
						<div className="flex flex-col font-spacegr text-xs lg:text-lg pb-3 lg:pb-5">
							<p className="text-center">
							Collaborate, support and help bring dreams to
								life.
							</p>
							<p className="text-center">
							Make real impact in your chosen Society.
							</p>
						</div>
						<div className="px-5 pb-10 hidden lg:block">
							<img src={HighFive} className="lg:max-h-96" />
						</div>
						<div className="pb-10 lg:hidden">
							<img src={FindMobile} className="" />
						</div>
					</div>
				</div>
				<div className="bg-yellow h-full lg:pt-32 px-14 bg-opacity-20">
					<div className="pt-5 lg:pt-10 items-center justify-center h-full space-y-5 lg:space-y-5 flex flex-col">
						<p className="font-semibold text-lg lg:text-3xl leading-tight">
						Experiment - Try it out
							
						</p>
						<div className="flex flex-col items-center font-spacegr text-xs lg:text-lg pb-5">
							<p className="text-center">
							Let the world see something new about you.

							</p>
							<p className="text-center">
							Take a step forward, find traction and scale.
							</p>
						</div>
						<div className="px-5 pb-10 hidden lg:block">
							<img src={Experiment} className="lg:max-h-96" />
						</div>
						<div className="pb-10 lg:hidden">
							<img src={ExperimentMobile} className="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
