import React, { useState } from 'react';

import Card from '../../components/card/Card';
import './ScreenHome.scss';

const ScreenHome = () => {

	const [copyItemVisible, setCopyItemVisible] = useState(false);

	const micLogo = require('../../assets/images/mic_logo.svg');
	const musicLogo = require('../../assets/images/music_logo.svg');
	const profileImage = require('../../assets/images/bildes.png');

	return (
		<div className="home-root">
			<div className="mic logo">
				<img src={micLogo.default} alt="" />
			</div>
			<div className="music-symbol logo">
				<img src={musicLogo.default} alt="" />
			</div>
			<div className="data-root">
				<div className="profile-image">
					<img src={profileImage.default} alt="" />
				</div>
				<div className="text">
					<p className="title">Gabriela Muniz</p>
					<p className="sub-title">Me acompanhe nas redes sociais:</p>
				</div>
				<div className="links-root">
					<Card
						name="PIX: apoiasegabriela@gmail.com"
						srcImage="pix_black.svg"
						linkUrl="apoiasegabriela@gmail.com"
						copyToClipboard
						onClickAction={() => { setCopyItemVisible(true); setTimeout(() => setCopyItemVisible(false), 3000); }}
					/>
					<Card
						name="Inscreva-se no meu canal"
						srcImage="youtube_black.svg"
						linkUrl="https://www.youtube.com/channel/UCy9FfYH1u8ev-atohVkwduw"
					/>
					<Card
						name="Me siga no Instagram"
						srcImage="instagram_black.svg"
						linkUrl="https://www.instagram.com/gabrielamunizcantora/"
					/>
					<Card
						name="Me siga no TikTok"
						srcImage="tiktok_black.svg"
						linkUrl="https://www.tiktok.com/@gabrielamunizcantora?lang=pt-BR"
					/>
					<Card
						name="Entre no grupo exclusivo de fãs"
						srcImage="telegram_black.svg"
						linkUrl="http://t.me/gabrielamunizcantora"
					/>
				</div>
				<div className={`copied-item ${copyItemVisible ? 'active' : ''}`}>
					<p className="text">Chave PIX copiada!</p>
				</div>
			</div>
		</div>
	)
}

export default ScreenHome;