import CoporateMan from "../../../static/arts/coporate-man.png";
import CoporateManMobile from "../../../static/arts/mobile/startup.png"

export const Startup = ({ activeSection }) => {
	let style =
		"h-screen absolute transform transition duration-500 ease-in-out overflow-y-auto lg:overflow-y-hidden";
	if (activeSection === 9) {
		style = style + " translate-y-0";
	} else {
		style = style + " translate-y-full";
	}
	return (
		<div className={style}>
			<div className="grid grid-cols-1 lg:grid-cols-2 h-full pt-5 lg:pt-0">
				<div className="h-full flex items-center lg:items-center lg:justify-center pt-20 lg:pt-0">
					<div className="pl-10 lg:px-0 lg:w-2/3 space-y-6 lg:space-y-7">
						<p className="w-4/5 font-bold text-lg lg:text-4xl leading-normal">
							I am Society - getting feedback for my start up
							idea.
						</p>
						
						<p className="text-left font-spacegr text-sm lg:text-base pr-5 lg:pr-0">
							Product Market Fit can be hard especially before a
							new product launch. My team and I have been
							researching and building for a year. Now, we're
							ready to begin controlled testing with real users!
						</p>
						<p className="text-left font-spacegr text-sm lg:text-base pr-5 lg:pr-0">
							We are using Society to create a virtual community
							for our product, while iterating on insights given
							and converting users into an active base.
						</p>
						<p className="text-left font-spacegr text-sm lg:text-base pr-5 lg:pr-0">
							We are confident and ready for launch!
						</p>
						<p className="text-left font-spacegr text-sm lg:text-base">
							<b>Welcome to our Society !</b>{" "}
							<span>&#128079;</span>
						</p>
					</div>
				</div>
				<div className="lg:flex pt-5 items-center justify-center px-0 hidden">
					<img src={CoporateMan} className="h-4/6"/>
				</div>
				<div className="flex pt-5 justify-end lg:hidden">
					<img src={CoporateManMobile} className="h-4/6"/>
				</div>
			</div>
		</div>
	);
};
