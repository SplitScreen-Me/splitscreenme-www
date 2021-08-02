import React, {useEffect, useState} from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/undraw_splitscreen_mountain.svg',
    description: (
      <>
        Simply download the Windows application, start it, pick a game, plug your controllers, grab some friends, and enjoy!
      </>
    ),
  },
  {
    title: <>Add your games</>,
    imageUrl: 'img/undraw_splitscreen_tree.svg',
    description: (
      <>
        We created tutorials to assist you in adding new games, and our amazing community is always willing to help & share.
        Join our Discord and read the <code>docs</code>.
      </>
    ),
  },
  {
    title: <>Fully Open-Source</>,
    imageUrl: 'img/undraw_splitscreen_computer.svg',
    description: (
      <>
        We're being backed by a lot of talented developers and always welcoming new ones! Jump into the Discord and get in touch with us.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const [featuredHandlers, setFeaturedHandlers] = useState([]);
  useEffect(()=>{
      fetch('https://hub.splitscreen.me/api/v1/handlerswebdisplay')
          .then(function(response) {
              return response.json();
          })
          .then(function(jsonContent) {
              setFeaturedHandlers(jsonContent.Handlers);
          });
  }, []);

  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`SplitScreen every game`}
      description="SplitScreen.Me is an application allowing players to play any game splitscreened.">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/installation')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className={styles.features}>
            <div className="container">
                <h2 style={{textAlign: 'center', marginBottom:'85px', marginTop:'50px', fontSize: '35px'}}>Featured games</h2>
                <div className="row">{featuredHandlers.map(handler => (
                    <div key={handler._id} className="col col--4" style={{paddingBottom:'50px'}}>
                <a href={`https://hub.splitscreen.me/handler/${handler._id}`}>
                    <div className={styles.featuredHandler} style={{background: `no-repeat center/cover url('https://images.igdb.com/igdb/image/upload/t_cover_big/${handler.gameCover}.jpg')`}} />
                </a></div>
                ))}
                    <div style={{textAlign:'center', width:'100%',marginBottom:'150px'}}><Link
                        className={classnames(
                            'button button--outline button--primary button--lg',
                            styles.getStarted,
                        )}

                        to="https://hub.splitscreen.me"
                        target="_self">
                        Explore all the games...
                    </Link></div>
                </div></div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
