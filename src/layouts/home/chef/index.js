import ChefImage from "../../../static/arts/chef.png";

export const Chef = ({ activeSection }) => {
	let style =
		"h-screen absolute transform transition duration-500 ease-in-out overflow-y-auto lg:overflow-y-hidden";
	if (activeSection === 7) {
		style = style + " translate-y-0";
	} else {
		style = style + " translate-y-full";
	}
	return (
		<div className={style}>
			<div className="grid grid-cols-1 lg:grid-cols-2 h-full pt-5 lg:pt-0 ">
				<div className="h-full flex lg:items-center lg:justify-center pt-20 lg:pt-0 pb-10 lg:pb-0">
					<div className="pl-5 w-full pr-5 lg:px-0 lg:w-2/3 space-y-6 lg:space-y-7">
						<p className="font-bold text-lg lg:text-4xl leading-normal">
							I am Society - aspiring to be a chef.
						</p>

						<p className="text-left font-spacegr text-sm lg:text-base">
							They say your first step is the hardest when
							starting out into the unknown. I am a lawyer at a
							successful fund management company. When not looking
							over countless agreements, I find myself dreaming up
							creative, new food recipes.
						</p>
						<p className="text-left font-spacegr text-sm lg:text-base">
							That step came when I first shared my culinary
							skills over a small virtual event on Society. Turns
							out I had nothing to be nervous about, as it got
							great feedback. My starting menu and creativity were
							a hit.
						</p>

						<p className="text-left font-spacegr text-sm lg:text-base">
							<b>
								So, what next? I'm inviting food critics and
								chefs from Society for a 3-day tasting event.
							</b>{" "}
							Wish me luck!
						</p>
					</div>
				</div>
				<div className="h-full lg:pt-32 flex justify-end">
					<img src={ChefImage} className="w-5/6" />
				</div>
			</div>
		</div>
	);
};
