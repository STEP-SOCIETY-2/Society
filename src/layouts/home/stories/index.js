import SocietyPhone from "../../../static/arts/society-phone.png";
import SocietyPhoneMobile from "../../../static/arts/mobile/story.png";

export const Stories = ({ activeSection }) => {
	let style =
		"h-screen w-full text-secondary bg-green absolute transform transition duration-500 ease-in-out";
	if (activeSection === 4) {
		style = style + " translate-y-0";
	} else {
		style = style + " translate-y-full";
	}
	return (
		<div className={style}>
			<div className="grid grid-cols-1 lg:grid-cols-2 h-full">
				<div className="flex items-center justify-center mt-16 lg:mt-0 h-full">
					<p className="text-6xl lg:text-8xl tracking-tighter font-extrabold font">
						Stories
					</p>
				</div>
				<div className="h-full lg:flex items-end justify-center hidden">
					<img src={SocietyPhone} className="w-2/3" />
				</div>
				<div className="flex items-end justify-center lg:hidden">
					<img src={SocietyPhoneMobile} className="h-4/5" />
				</div>
			</div>
		</div>
	);
};
