import MouseImage from "../../static/mouse/mouse.png";

export const Mouse = ({ activeSection, setActiveSection }) => {
	return (
		<div className={`right-0 left-0 z-50 bottom-2 lg:bottom-8 fixed ${activeSection !== 11 ? "" : "hidden"}`}>
			<div
				className="flex justify-center"
			>
				<img onClick={() => {
					if (activeSection === 12) {
						setActiveSection(0);
					} else {
						setActiveSection(activeSection + 1);
					}
				}} src={MouseImage} className="h-10 lg:h-12 cursor-pointer animate-bounce transform hover:scale-110"/>
			</div>
		</div>
	);
};
