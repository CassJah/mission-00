import React from "react";
import ContentBlock from "./ContentBlock";
import "./MainContent.css";
import extraImage1 from "../../src/assets/peter-luo-5zZTbMJzlSs-unsplash.jpg"; // Update with the actual path to your image
import extraImage2 from "../../src/assets/uran-wang-IdUfwA11IdU-unsplash.jpg"; // Update with the actual path to your image

const MainContent = () => (
  <main className="main-content">
    <div className="top-row">
      <ContentBlock title="Latest News">
        <div className="news-articles">
          <article>
            <h3>Article Title 1</h3>
            <p>
              Summary of the first news article. This should give a brief
              overview of the news content.
            </p>
            <a href="/news/article1">Read more</a>
          </article>
          <article>
            <h3>Article Title 2</h3>
            <p>
              Summary of the second news article. This should give a brief
              overview of the news content.
            </p>
            <a href="/news/article2">Read more</a>
          </article>
        </div>
      </ContentBlock>
      <ContentBlock title="Upcoming Events">
        <div className="events-list">
          <div className="event">
            <h3>Event 1</h3>
            <p>Date: 10th June 2024</p>
            <p>Description of the first event.</p>
            <a href="/events/event1">More info</a>
          </div>
          <div className="event">
            <h3>Event 2</h3>
            <p>Date: 25th June 2024</p>
            <p>Description of the second event.</p>
            <a href="/events/event2">More info</a>
          </div>
        </div>
      </ContentBlock>
      <ContentBlock title="Member Benefits">
        <ul className="benefits-list">
          <li>Access to exclusive resources and tools.</li>
          <li>Networking opportunities with industry leaders.</li>
          <li>Discounts on events and workshops.</li>
          <li>Professional development and training.</li>
        </ul>
      </ContentBlock>
    </div>
    <div className="bottom-row">
      <ContentBlock title="">
        <img src={extraImage1} alt="Extra Section 1" className="extra-image" />
      </ContentBlock>
      <ContentBlock title="Contact Us">
        <form className="contact-form">
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Message:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </ContentBlock>
      <ContentBlock title="">
        <img src={extraImage2} alt="Extra Section 2" className="extra-image" />
      </ContentBlock>
    </div>
  </main>
);

export default MainContent;
