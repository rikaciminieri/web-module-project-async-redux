import React, { useEffect } from "react";
import kanye from "../assets/Kanye_West.jpeg";
import { connect } from "react-redux";
import { getQuote } from "../actions/quotesActions";

const Kanye = (props) => {
  const { quote, isFetching, error, getQuote } = props;

  useEffect(() => {
    props.getQuote();
  }, []);

  if (error) {
    return (
      <h2>Kanye won't let us grab a quote cause of this error :( {error}</h2>
    );
  }

  if (isFetching) {
    return <h2>Kanye is preparing his best quote for you ... one sec</h2>;
  }

  const handleClick = () => {
    getQuote();
  };

  return (
    <div>
      <h1>WHAT WOULD KANYE SAY?</h1>
      <h2>This is Kanye West. He says a lot of wacky stuff.</h2>
      <h2>Wanna see some 💩?</h2>
      <img src={kanye} style={{ width: "150px" }} />
      <div>
        <button className="btn" onClick={handleClick}>
          CLICK ME
        </button>
      </div>
      <p id="quote">{quote}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getQuote })(Kanye);
