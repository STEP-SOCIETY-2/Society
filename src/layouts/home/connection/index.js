import HappyMan from "../../../static/arts/happy-man.png";

export const Connection = ({ activeSection }) => {
	let style =
		"h-screen absolute transform transition duration-500 ease-in-out overflow-y-auto lg:overflow-y-hidden";
	if (activeSection === 6) {
		style = style + " translate-y-0";
	} else {
		style = style + " translate-y-full";
	}
	return (
		<div className={style}>
			<div className="grid grid-cols-1 lg:grid-cols-2 h-full pt-5 lg:pt-0">
				<div className="transform lg:translate-x-14 lg:pt-32 ">
					<img src={HappyMan} className="w-4/5" />
				</div>
				<div className="h-full flex items-center justify-end pr-10 lg:justify-center pt-20 lg:pt-0 order-first lg:order-last pb-10 lg:pb-0">
					<div className="w-5/6 flex-col lg:px-0 lg:w-2/3 space-y-5 lg:space-y-7 text-right lg:text-left">
						<p className="font-bold text-lg lg:text-4xl leading-normal">
							I am Society - making new connections.{" "}
						</p>

						<p className="font-spacegr text-sm lg:text-base">
							I had an idea to meet and make meaningful
							connections with the world around me. The rooftop of
							my apartment building is a great place to hold a
							conversation - with a view of the nearby tropical
							waters, a cool breeze over sounds of a bustling
							city, and no mosquitoes!
						</p>
						<p className="font-spacegr text-sm lg:text-base">
							<b>
								Society allowed me to create trusted one-on-one
								moments - evenings to remember.
							</b>{" "}
							Now tea and great sunsets are the backdrop to
							exploring common interests with my city.{" "}
							<b>Book an evening with me</b> if you're ever in
							town. <span className="rotate-45">&#128512;</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
