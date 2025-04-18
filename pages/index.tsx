import Layout from '../components/Layout'
import dynamic from 'next/dynamic';
import styles from '../style/app-card.module.css';
const GitHubButton = dynamic(() => import('react-github-btn'), { ssr: false })

const IndexPage = () => (
  <Layout title="Home | Let me introduce Dongsuo">
    <div className="home-page-container">
      <div className="lang-switch">
        <a href="/zh">中文</a>
      </div>
      <h1>Hi, Welcome.</h1>
      <h4>Let me introduce.</h4>
      <p>
        Dongsuo(东索 in Chinese) is a programmer, born in 1992. He lived in Wuhan from 2011 to 2018.
        Now he is living in Shanghai and working at <a href="https://www.bytedance.com/en" target="_blank">Bytedance</a>.
      </p>
      <p>
        He majored in Library Science in Wuhan University as bachelor and master,
        (Library Science is a domain about information organization and management).
        He learned programming all by himself, he is still trying
        to have a more comprehensive understanding of computer and internet.
      </p>
      <p>
        He likes reading, mostly about history, sociology and philosophy.
      </p>
      <p>
        He is an idealist, he believes the world will be better, though he may fall into despair sometimes.
      </p>
      <p>
        His favorite singer is <a href="https://zh.wikipedia.org/wiki/%E6%9D%8E%E5%BF%97" target="_blank">lizhi</a>.
      </p>
      <p>
        He like the design of Apple's product, but he doesn't like Apple's closed software ecosystem.
        And this is also the reason why he doesn't like WeChat and Tencent, he is trying to get rid of WeChat as possible as he can.
      </p>
      <p>
        He mainly works as a frontend programmer, but he has a passion for building elegant product.
      </p>
      <p>Here is some of his works:</p>

      <div className={styles['app-cards']}>
        <a href="https://apps.apple.com/us/app/read-copilot/id6449242676" target="_blank" className={styles['app-card']}>
          <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/06/1b/d0/061bd020-1f14-642f-9de9-b14983e2322d/AppIcon-0-0-1x_U007epad-0-1-85-220.png/246x0w.webp" alt="Read Copilot" className={styles['app-icon']} />
          <div className={styles['app-content']}>
            <div className={styles['app-title']}>Read Copilot</div>
            <div className={styles['app-description']}>An iOS app that helps you read better.</div>
          </div>
        </a>
        <a href="https://apps.apple.com/us/app/life-progress-with-widget/id6740145361" target="_blank" className={styles['app-card']}>
          <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/22/ff/ad/22ffaddc-69be-1a3e-3daa-d6ebd065d792/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/320x0w.webp" alt="Life Progress" className={styles['app-icon']} />
          <div className={styles['app-content']}>
            <div className={styles['app-title']}>Life Progress</div>
            <div className={styles['app-description']}>An iOS app that helps you track your life progress.</div>
          </div>
        </a>
      </div>

      <div className="repo-card" data-repo="dongsuo/vue-data-board"></div>
      <div className="repo-card" data-repo="dongsuo/vue-terminal"></div>

      <p>He also has a <a href="https://blog.islasher.com">blog</a>. </p>
      <p>You can find him here:</p>
      <GitHubButton href="https://github.com/dongsuo" aria-label="Follow @dongsuo on GitHub">
        @dongsuo
      </GitHubButton>
      <p>
        If you are interested in him and want to chat with him, feel free to get in touch via
        <a href="mailto:xuxiaofei915@gmail.com">xuxiaofei915@gmail.com</a>, He is a little shy, but he will reply you.</p>
    </div>
  </Layout>
)

export default IndexPage
