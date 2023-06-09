# React Cat Lovers App

This is a React.js application designed for cat lovers which utilizes
[The Cat API](https://thecatapi.com/). The app features three main views that
cater to different user preferences, allowing for an exploration of random cat
images, breed-specific images, and personal favorite images.

## :paw_prints: Views

### :framed_picture: Random Cat Images

This view displays a list of 10 random cat images fetched from The Cat API, with
a button to load more images. Clicking on an image opens a modal with a larger
version of the image, along with any available breed information. If breed
information is available, it contains a link to the breed detail view. The modal
also contains a feature to mark the image as a favorite. The URL of each
individual cat image can be copied and shared with friends, leading them
directly to the same view. Also, if the list is getting too long, you can press
the get other cats! button so it'll get you 10 new random cats.

### :books: Cat Breed List

This view presents a list of cat breeds. Clicking on a breed opens a modal
containing a list of images specific to that breed. Each image in this list can
be clicked on to view the image in a larger format along with any additional
breed information available, similar to the random cat images view.

### :star: Favourite Cats

This view allows users to interact with their list of favorite cats. The
selected favorite images are stored and displayed for the user to revisit. There
is also an option to remove an image from the favorites list, allowing for user
customization of this list over time.

## :sparkles: Additional Features

- **Image Sharing:** All images have a unique URL, which can be copied and
  shared. When the URL is visited, the user is shown the same image and
  corresponding cat breed information, if available.
- **Favorites Context:** The application uses React Context for managing
  favorites. This makes the state of the user's favorite images easily
  accessible throughout the application, allowing for consistent updates across
  different views.
- **Responsive Design:** The application is fully responsive, allowing for an
  enjoyable user experience on devices of various screen sizes.

## :rocket: Running the App

This app was built with Create-Next-App. To run the app, use `npm run dev` or
`yarn dev` and open [http://localhost:3000](http://localhost:3000) with your
browser to see the result.
