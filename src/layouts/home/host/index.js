import Share from "../../../static/arts/share.png";
import ShareMobile from "../../../static/arts/mobile/share.svg"
import Play from "../../../static/arts/play.png";
import PlayMobile from "../../../static/arts/mobile/play.png";
export const Host = ({ activeSection }) => {
	let style =
		"h-screen w-full absolute transform  transition duration-500 ease-in-out overflow-y-auto lg:overflow-y-hidden";
	if (activeSection === 1) {
		style = style + " translate-y-0";
	} else {
		style = style + " translate-y-full";
	}
	return (
		<div className={style}>
			<div className="grid lg:grid-cols-2 text-center h-full">
				<div className="bg-pink lg:pt-32 pt-14 px-14">
					<div className="pt-10 items-center justify-center space-y-5 lg:space-y-5 flex flex-col">
						<p className="font-semibold text-lg lg:text-3xl leading-tight">
							Host an Experience - Share an idea
						</p>
						<div className="flex flex-col font-spacegr text-xs lg:text-lg lg:pb-5">
							<p className="text-center">
								Society connects your expression and passion
								with the right people.
							</p>
							<p className="text-center hidden lg:block">
								Create physical or virtual Moments that give
								your ideas life.
							</p>
							<p className="text-center lg:hidden">
								Create experiences that give
								your ideas life.
							</p>
						</div>
						<div className="px-5 pb-10 hidden lg:block">
							<img src={Share} className="lg:max-h-96" />
						</div>
						<div className="pb-10 lg:hidden">
							<img src={ShareMobile} className="" />
						</div>
					</div>
				</div>
				<div className="bg-yellow lg:pt-32 px-14 bg-opacity-20">
					<div className="pt-5 lg:pt-10 items-center justify-center h-full space-y-5 lg:space-y-5 flex flex-col">
						<p className="font-semibold text-lg lg:text-3xl leading-tight">
							Attend an event - Be playful
						</p>
						<div className="flex flex-col items-center font-spacegr text-xs lg:text-lg lg:pb-5">
							<p className="text-center hidden lg:block">
								Get inspired. Moments are events by others just
								as passionate as you are.
							</p>
							<p className="text-center hidden lg:block">
								Personalize and discover new Moments using
								Hashtags.
							</p>
							<p className="text-center lg:hidden">
								Personalise and discover new experiences
								using Hashtags
							</p>
						</div>
						<div className="px-5 pb-10 hidden lg:block">
							<img src={Play} className="lg:max-h-96" />
						</div>
						<div className="pb-10 lg:hidden">
							<img src={PlayMobile} className="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
