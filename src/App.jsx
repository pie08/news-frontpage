import { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import styled, { css } from "styled-components";
import { useOutsideClick } from "./hooks/useOutsideClick";

const Container = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  padding: 0 2.4rem;

  @media (max-width: 53em) {
    max-width: 70rem;
  }
`;

const hidden = css`
  pointer-events: none;
  visibility: hidden;
  opacity: 0;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6.4rem;

  @media (max-width: 53em) {
    &::before {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: var(--color-dark-blue);
      z-index: 998;
      opacity: 0%;
      transition: all 0.2s;
      ${hidden}

      ${(props) =>
        props.$isOpen &&
        css`
          opacity: 50%;
          visibility: visible;
          pointer-events: all;
        `}
    }
  }
`;

const Nav = styled.nav`
  & ul {
    list-style: none;
    display: flex;
    gap: 2.4rem;

    & li a {
      transition: all 0.2s;
      font-weight: 400;
      color: var(--color-dark-gray-blue);

      &:hover {
        cursor: pointer;
        color: var(--color-orange);
      }
    }
  }

  @media (max-width: 53em) {
    position: fixed;
    top: 0;
    right: 0;
    min-width: 70vw;
    min-height: 100vh;
    background-color: var(--color-off-white);
    padding: 3.2rem;
    overflow-y: auto;
    translate: 100% 0;
    transition: all 0.2s;
    z-index: 999;
    ${hidden}

    ${(props) =>
      props.$isOpen &&
      css`
        translate: 0 0;
        opacity: 100;
        visibility: visible;
        pointer-events: all;
      `}

    & ul {
      display: flex;
      flex-direction: column;
      margin-top: 14rem;

      & li a {
        font-size: 2rem;
        color: var(--color-dark-blue);
      }
    }

    & button {
      position: absolute;
      right: 3.2rem;
    }
  }
`;

const MobileNavButton = styled.button`
  height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;

  & img {
    display: block;
  }

  @media (max-width: 53em) {
    display: block;
  }
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3.2rem;

  @media (max-width: 53em) {
    grid-template-columns: 1fr;
  }
`;

const Img = styled.picture`
  display: block;
  grid-column: 1 / 3;

  & img {
    width: 100%;
  }

  @media (max-width: 53em) {
    grid-column: auto;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  @media (max-width: 53em) {
    & p {
      margin-bottom: 2.4rem;
      margin-top: -0.8rem;
    }
  }
`;

const Button = styled.button`
  padding: 1.2rem 2.8rem;
  background-color: var(--color-red);
  color: var(--color-off-white);
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 4px;
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-dark-blue);
  }
`;

const NewStories = styled.aside`
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  background-color: var(--color-dark-blue);
  padding: 3.2rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  & h2 {
    color: var(--color-orange);
    font-size: 3.6rem;
  }

  & ul {
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & li {
    color: var(--color-gray-blue);

    & a {
      font-size: 2rem;
      color: var(--color-off-white);
    }

    & a:hover {
      color: var(--color-orange);
    }

    @media (max-width: 53em) {
      &:not(:last-child) {
        margin-bottom: 2.4rem;
      }
    }
  }

  @media (max-width: 53em) {
    grid-column: auto;
    grid-row: auto;
    margin-top: 4.8rem;
  }
`;

const Divider = styled.span`
  height: 1px;
  width: 100%;
  background-color: var(--color-dark-gray-blue);
  display: block;
`;

const RecommendedArticle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-top: 4.8rem;
  align-items: start;

  & img {
    max-width: 100%;
  }

  & div {
    grid-column: 2 /-1;
  }
`;

const Number = styled.p`
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-gray-blue);
`;

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function close() {
    setIsOpen(false);
  }
  const ref = useOutsideClick(close);

  return (
    <>
      <GlobalStyles />

      <Container>
        <Header $isOpen={isOpen}>
          <img src="/assets/images/logo.svg" alt="logo" />

          <Nav $isOpen={isOpen} ref={ref}>
            <MobileNavButton onClick={() => setIsOpen((open) => !open)}>
              <img src="/assets/images/icon-menu-close.svg" alt="open" />
            </MobileNavButton>

            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">New</a>
              </li>
              <li>
                <a href="#">Popular</a>
              </li>
              <li>
                <a href="#">Trending</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
            </ul>
          </Nav>

          <MobileNavButton onClick={() => setIsOpen((open) => !open)}>
            <img src="../public/assets/images/icon-menu.svg" alt="open" />
          </MobileNavButton>
        </Header>
      </Container>

      <Container>
        <Main>
          <Img>
            <source
              srcSet="/assets/images/image-web-3-mobile.jpg"
              media="(max-width: 53em)"
            />

            <img src="/assets/images/image-web-3-desktop.jpg" alt="web 3" />
          </Img>

          <h1>The Bright Future of Web 3.0?</h1>

          <Description>
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <Button>Read more</Button>
          </Description>

          <NewStories>
            <h2>New</h2>

            <ul>
              <li>
                <a href="#">Hydrogen VS Electric Cars</a>
                <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
              </li>
              <li>
                <Divider />
              </li>
              <li>
                <a href="#">The Downsides of AI Artistry</a>
                <p>
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </p>
              </li>

              <li>
                <Divider />
              </li>
              <li>
                <a href="#">Is VC Funding Drying Up?</a>
                <p>
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </p>
              </li>
            </ul>
          </NewStories>

          <RecommendedArticle>
            <img src="assets/images/image-retro-pcs.jpg" alt="" />
            <div>
              <Number>01</Number>
              <a href="#">Reviving Retro PCs</a>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </RecommendedArticle>
          <RecommendedArticle>
            <img src="assets/images/image-top-laptops.jpg" alt="" />
            <div>
              <Number>02</Number>
              <a href="#">Top 10 Laptops of 2022</a>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </RecommendedArticle>
          <RecommendedArticle>
            <img src="assets/images/image-gaming-growth.jpg" alt="" />
            <div>
              <Number>03</Number>
              <a href="#">The Growth of Gaming</a>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </RecommendedArticle>
        </Main>
      </Container>
    </>
  );
}

export default App;
