import YogaFemale from "../../../static/arts/yoga-female.png";

export const Yoga = ({ activeSection }) => {
	let style =
		"h-screen absolute transform transition duration-500 ease-in-out";
	if (activeSection === 5) {
		style = style + " translate-y-0";
	} else {
		style = style + " translate-y-full";
	}
	return (
		<div className={style}>
			<div className="grid grid-cols-1 lg:grid-cols-2 h-full pt-5 lg:pt-0">
				<div className="h-full flex lg:items-center lg:justify-center pt-20 lg:pt-0">
					<div className="pl-10 w-4/5 lg:px-0 lg:w-2/3 space-y-6 lg:space-y-7">
						<p className="font-bold text-lg lg:text-4xl leading-normal">
							I am Society- creating yoga dance moments
						</p>

						<p className="text-left font-spacegr text-sm lg:text-base">
							I love dancing and have an active lifestyle. Two
							years ago, I sprained my back in the middle of a
							dance routine. To aid my therapy I took up yoga and
							enjoyed it so much I became an instructor - fusing
							yoga and dance.
						</p>
						<p className="text-left font-spacegr text-sm lg:text-base">
							Now four days a week I teach traditional yoga on
							Society. Day five is for virtual sessions, exploring
							experimental dance yoga with my nimbler followers.
						</p>
					</div>
				</div>
				<div className="lg:pt-32 transform translate-x-20 lg:translate-x-0">
					<img src={YogaFemale} />
				</div>
			</div>
		</div>
	);
};
