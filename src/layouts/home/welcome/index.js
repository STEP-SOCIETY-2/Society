import IPhone from "../../../static/arts/welcomephone.png";
import { SmallButton } from "../../../commons/buttons/SmallButton";

export const Welcome = ({ activeSection, setActiveSection }) => {
	let style =
		"bg-pink h-screen pt-24 lg:pt-32 absolute transform  w-full transition duration-500 ease-in-out overflow-y-auto lg:overflow-y-hidden";
	if (activeSection === 0) {
		style = style + " translate-y-0";
	} else {
		style = style + " translate-y-full";
	}

	return (
		<div className={style}>
			{/* transform translate-y-full transition duration-500 ease-in-out */}
			<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 h-full">
				<div className="flex flex-col lg:flex-row items-center h-full">
					<ul className="px-5 lg:px-0 list-none text-green font-medium lg:font-semibold text-xs lg:text-sm lg:space-y-6 flex flex-row flex-wrap justify-between w-full lg:flex-col lg:ml-10 lg:w-2/5 font-spacegr">
						<li>
							<p className="">Welcome</p>
						</li>
						<li onClick={() => setActiveSection(1)}>
							<p>What is society</p>
						</li>
						<li onClick={() => setActiveSection(4)}>
							<p>Society Stories</p>
						</li>
						<li onClick={() => setActiveSection(11)}>
							<p>Join Society</p>
						</li>
					</ul>
					<div className="pt-10 lg:pt-0 px-10 lg:px-0 w-full lg:w-3/5 text-green space-y-9 lg:space-y-11">
						<p className="text-5xl lg:text-7xl font-extrabold tracking-tighter">
							Welcome to Society
						</p>
						<p className="text-lg lg:text-xl font-spacegr">
							Accelerate your ideas. Explore your passion.
						</p>
						<SmallButton onClick={() => setActiveSection(11)}>Join us</SmallButton>
					</div>
				</div>
				<div className="inline-flex justify-center items-end">
					<img src={IPhone} />
				</div>
			</div>
		</div>
	);
};
