import styled from "styled-components";

function Projects() {
  return (
    <SECTION id="projects">
      <div className="box">
        <h1>Projects</h1>
        <div className="b1"></div>

        <div className="b2">
          <div className="c"></div>
          <div className="c"></div>
          <div className="c2"></div>
          <div className="c3"></div>
          <div className="c"></div>
          <div className="c"></div>
        </div>
        <div className="b3">
          <div className="c"></div>
          <div className="c"></div>
          <div className="c4"></div>
          <div className="c"></div>
          <div className="c"></div>
          <div className="c5"></div>
          <div className="c"></div>
          <div className="c"></div>
        </div>
        <div className="b4">
          <div className="c1"></div>
          <div className="c1"></div>
          <div className="c6"></div>
          <div className="c1"></div>
          <div className="c1"></div>
          <div className="c7"></div>
          <div className="c1"></div>
          <div className="c1"></div>
          <div className="c1"></div>
        </div>
        <div>
          <div className="cont">
            <h2>Welcome to the Projects Section </h2>
            <div className="animated2">
              <div className="line">React</div>
              <div className="line">HTML</div>
              <div className="line">CSS</div>
              <div className="line">JavaScript</div>
              <div className="line">Redux</div>
            </div>
          </div>
        </div>
      </div>
    </SECTION>
  );
}

export default Projects;

const SECTION = styled.section`
  height: 1000px;
  color: white;

  h1 {
    background-color: black;
    padding: 30px 0px;
    width: 300px;
    margin: auto;
    border-radius: 50px 0px 50px 0px;
    border: solid white 3px;
    color: #17e8eb;
    font-size: 30px;
  }

  .box {
    width: 100%;
    height: 900px;
    margin: auto;
    /* background-color: #17e8eb;  */
  }

  .cont {
    z-index: -100;
    width: 100%;
    height: 500px;
    margin: auto;
    background-color: white;
    transition: transform 1s ease-in;
    background-color: #161616;
    /* background-color: #17e8eb; */
    /* background-color: transparent; */
    transform: translateY(-50%);
  }

  .box:hover .cont {
    animation: top-to-bottom 5s ease-in forwards;
  }

  @keyframes top-to-bottom {
    0% {
      transform: translateY(-50%);
    }
    100% {
      transform: translateY(50%);
    }
  }

  h2 {
    color: white;
    font-size: 55px;
    background: linear-gradient(90deg, #cdc6c6 0%, #999393 63%, #959292 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
  }

  .animated2 {
    color: #17e8eb;
    margin-top: 100px;
    height: 60px;
    overflow: hidden;
  }

  .line {
    text-align: center;
    /* font-size: 20px; */
    font-size: 50px;
    text-transform: uppercase;
    line-height: 60px;
  }

  .line:first-child {
    animation: anim 12s infinite;
  }

  @keyframes anim {
    0% {
      margin-top: 0;
    }
    16% {
      margin-top: -60px;
    }
    33% {
      margin-top: -120px;
    }
    50% {
      margin-top: -180px;
    }
    66% {
      margin-top: -120px;
    }
    82% {
      margin-top: -60px;
    }
    100% {
      margin-top: -380px;
    }
  }

  .b1 {
    margin: auto;
    border-left: solid white 3px;
    width: 0px;
    height: 50px;
  }

  .b2 {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    height: 50px;
  }

  .b3 {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    height: 50px;
  }

  .b4 {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    height: 50px;
  }

  .c1 {
    /* border-top: solid white 3px; */
    /* border: solid white 3px; */
  }

  .c2 {
    height: 50px;
    border-top: solid white 3px;
    border-left: solid white 3px;
  }
  .c3 {
    height: 50px;
    border-top: solid white 3px;
    border-right: solid white 3px;
  }

  .c4 {
    height: 50px;
    border: solid white 3px;
  }
  .c5 {
    height: 50px;
    border: solid white 3px;
  }

  .c6 {
    height: 50px;
    border-right: solid white 3px;
  }
  .c7 {
    height: 50px;
    border-right: solid white 3px;
  }
`;
