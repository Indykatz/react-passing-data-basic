// ({item}) is passed to app.js

const About = ({ item }) => {
  return (
    <div>
      <h1>About</h1>
      <h2>Show the value here...</h2>
      {/* Maps each ({ item }) to app.js */}
      {item.map((item, i) => (
        <div key={i}>
          <p>{item.item}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
