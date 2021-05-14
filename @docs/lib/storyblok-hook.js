import { useEffect, useRef, useState } from "react";
import Storyblok from "./storyblok-client";

/*
 *
 * This is hook, used to dynamically sync stories
 * between Storyblok cms, and live preview
 * it is used mostly in /editor? (editor.js)
 *
 * */
export default function useStoryblok(originalStory) {
  const [story, setStory] = useState(originalStory);
  const isInitiallyFetched = useRef(false);

  // adds the events for updating the visual editor
  // see https://www.storyblok.com/docs/guide/essentials/visual-editor#initializing-the-storyblok-js-bridge
  function initEventListeners() {
    if (window.storyblok) {
      window.storyblok.init();

      // reload on Next.js page on save or publish event in the Visual Editor
      window.storyblok.on(["change", "published"], () => console.log("Saved!"));

      // live update the story on input events
      window.storyblok.on("input", (event) => {
        if (event.story.content._uid === story.content._uid) {
          event.story.content = window.storyblok.addComments(
            event.story.content,
            event.story.id
          );
          window.storyblok.resolveRelations(
            event.story,
            ["featured-articles.articles"],
            () => {
              setStory(event.story);
            }
          );
        }
      });
    }
  }

  // appends the bridge script tag to our document
  // see https://www.storyblok.com/docs/guide/essentials/visual-editor#installing-the-storyblok-js-bridge
  function addBridge(callback) {
    // check if the script is already present
    const existingScript = document.getElementById("storyblokBridge");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = `https://app.storyblok.com/f/storyblok-latest.js?t=${Storyblok.accessToken}`;
      script.id = "storyblokBridge";
      document.body.appendChild(script);
      script.onload = () => {
        // once the scrip is loaded, init the event listeners
        callback();
      };
    } else {
      callback();
    }
  }

  useEffect(() => {
    if (!isInitiallyFetched.current && story) {
      addBridge(initEventListeners);
      isInitiallyFetched.current = true;
    }
  }, [story]);

  return [story, setStory];
}
