import React from 'react';

import Animation from '~/components/Animation';

export default class Showcase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0
        }
        this.setHeight = this.setHeight.bind(this);
    }
    componentDidMount() {
        this.setHeight();
        window.addEventListener('resize', this.setHeight);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.setHeight);
    }
    setHeight() {
        this.setState({
            height: window.innerHeight
        });
    }
    render() {
        let height = this.state.height;
        return (
            <section className="showcase">
                <div className="container">
                    <div className="visual">
                        <Animation id="apps-on-phone" bottomLimit={height * 2.5 / 4} />
                    </div>
                    <div className="text">
                        <div className="content">
                            <h2>Kafası dijital çalışan bir oyun şirketiyiz!</h2>
                            <p>Digitoy Games olarak, en iyi bildiğimiz işi yapıyoruz. İnsanları bir araya getiren oyunlarla, eğlenceli ve anlamlı sosyal etkileşimler yaratmayı hedefliyoruz.</p>
                            <button lang="tr">Hikayemizi Oku</button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="visual">
                        <Animation id="game-materials-on-table" />
                    </div>
                    <div className="text">
                        <div className="content">
                            <h2>Başlaması kolay, bırakması zor oyunlar…</h2>
                            <p>Sosyal oyun sevenler için birbirinden eğlenceli oyunlar üretiyoruz. Okey Extra, 101 Extra ve Poker Extra gibi oyunlarımızı her gün milyonlarca kişi oynuyor.</p>
                            <button lang="tr">Oyunlarımızı İncele</button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="visual">
                        <Animation id="work-in-office" bottomLimit={height * 2.5 / 4} />
                    </div>
                    <div className="text">
                        <div className="content">
                            <h2>Çalışma alanı değil, yaşam alanı...</h2>
                            <p>Türkiye’nin ilk mobil oyun stüdyosunda hayat nasıl akıyor sorusunun cevabını merak ediyorsan, yaratıcı fikirlerimizi ürettiğimiz samimi ortamı ziyaret edebilirsin.</p>
                            <button lang="tr">Ofisimize Göz At</button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="visual">
                        <Animation id="career-levels" bottomLimit={height * 2.5 / 4} />
                    </div>
                    <div className="text">
                        <div className="content">
                            <h2>Kariyerinde level atla!</h2>
                            <p>Milyonların elinden düşürmediği oyunlarımızın arka planında yeteneklerini tutkuya dönüştürmüş bir ekip var. Eğer bu fikir seni de heyecanlandırıyorsa doğru yerdesin.</p>
                            <button lang="tr">Bize Katıl</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}