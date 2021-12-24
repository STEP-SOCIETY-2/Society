import { RWebShare } from "react-web-share";
import Celebrate from "../../../static/arts/celebrate.png";
import LogoWhite from "../../../static/logo/logowhite.png";
import { ShareButton } from "../../../commons/buttons/ShareButton";
import { IoIosPaperPlane } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

export const Share = ({ activeSection, setActiveSection }) => {
	let style =
		"h-screen w-full absolute transform transition duration-500 ease-in-out";
	if (activeSection === 12) {
		style = style + " translate-y-0";
	} else {
		style = style + " translate-y-full";
	}
	return (
		<div className={style}>
			<div className="h-full text-center">
				<div className="h-2/3 lg:h-1/2 flex flex-col justify-evenly lg:justify-center  items-center lg:space-y-5">
					<div className="flex flex-col lg:flex-row gap-8 lg:gap-2 justify-center items-center space-x-7">
						<p className="text-5xl lg:text-6xl font-semibold tracking-tighter">
							Let the renaissance begin!
						</p>
						<img src={Celebrate} className="h-14 lg:h-50" />
					</div>
					<div className="flex flex-col lg:flex-row justify-center items-center lg:space-y-0 space-x-5 space-y-5">
						<RWebShare
							data={{
								text: "Hey, Check this out! \n",
								url: "http://joinsociety.org",
								title: "Society",
							}}
						>
							<button>
								<ShareButton>
									<div className="flex items-center w-full justify-center space-x-3">
										<IoIosPaperPlane size={20}/>
										<p>
											Share
										</p>
									</div>
								</ShareButton>
							</button>
						</RWebShare>
						<p className="text-lg lg:text-base">Society with your friends</p>
					</div>
				</div>
				<div className="h-1/3 lg:h-1/2 bg-green flex flex-col justify-evenly p-10 pt-0 items-center text-secondary">
					<div className="lg:h-32 flex justify-center items-center cursor-pointer" onClick={() => {
						setActiveSection(0)
					}}>
						<span className="px-3 lg:px-5">
							<img src={LogoWhite} className="h-7 lg:h-10" />
						</span>
						<p className="text-3xl lg:text-5xl font-medium">society</p>
					</div>
					<div className="flex flex-col lg:flex-row lg:space-x-5 lg:space-y-0 lg:items-center space-y-4">
						<div className="flex justify-center space-x-5">
							<a href="https://www.instagram.com/_joinsociety" target="_blank"> <AiOutlineInstagram /></a>
							<a href="https://twitter.com/_joinSociety" target="_blank"><FiTwitter /></a>
						</div>
						<p className="text-xs lg:text-base">Info@joinsociety.org</p>
					</div>

				</div>
			</div>
		</div>
	);
};
