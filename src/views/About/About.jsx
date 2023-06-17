export default function About() {
  return (
    <div className="text-center container">
      <section >
        <h3 className="text-secondary mt-3">About Gamepedia</h3>
        <h4 className="text-info">
          Web site made by Leandro Licata, powered by RAWG API, the largest open
          videogames database!
        </h4>
      </section>
      <section>
        <h3 className="text-secondary mt-3">You can find me in:</h3>
        <a
          href="https://www.linkedin.com/in/leandro-nicol%C3%A1s-licata-522898265/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <br/>
        <a
          href="https://github.com/LeandroLicata"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <br/>
        <a
          href="https://dev-leandrodev.pantheonsite.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My portfolio
        </a>
      </section>
    </div>
  );
}
