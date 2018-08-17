Flipr
=====

[Flipr](https://flipr-app.herokuapp.com/), a web application similar to Flickr, allows users to upload and share photos with others. Users would also be able to explore the photos uploaded by others, collect these into their own album, and comment on each others' submissions.

![HomePage](https://raw.githubusercontent.com/hanqingchen15/Flipr/master/docs/readme/images/Homepage.png "Logo Title Text 1")

Features
----
* Secure front-end and back-end authentication
* Users can easily upload new photos or update existing photos
* Photos are displayed a grid that automatically resizes to fit the browser window

#### Overall Site Design ####

##### Background Image #####

The background image is only shown at the splash page, the log-in and sign-up pages. All other pages have a white background instead. To dynamically switch the background based on a user's location, I took advantaged of `componentDidMount` and `componentWillUnmount` React functions in the splash, log-in, and sign-up pages' components:

```javascript
componentWillUnmount() {
  let removeBackground = $(".background");
  removeBackground.removeClass("background");
  removeBackground.addClass("backgroundHidden");
}

componentDidMount() {
  let addBackground = $(".backgroundHidden");
  addBackground.removeClass("backgroundHidden");
  addBackground.addClass("background");
}
```

#### Authentication ####

##### Password Storage #####

Instead of storing passwords in plaintext, flipr uses the BCrypt hashing function to store salted password digests in the database.

##### Session Token #####

Session tokens are generated using `SecureRandom`, and is cross-referenced against existing session tokens to ensure each user has a unique session token when logging in. Their session token is reset when logging out.

##### Restricted Paths #####

Using `AuthRoute` and `ProtectedRoute` defined with React's router functionalities, users are redirected to `/#/login` when trying to view contents that require a session token. Conversely, users are prevented from visiting `/#/login` and `/#/signup` pages when already logged in.

```javascript
const Auth = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}/>
);

const Protected = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    )} />
);

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.id)};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
```

#### Photos ####

##### Explore #####

![Explore](https://raw.githubusercontent.com/hanqingchen15/Flipr/master/docs/readme/images/Explore%20Page.png "Logo Title Text 1")

Users are able to view all the photos uploaded to flipr on this page., which is rendered using the `column` CSS properties. The page will dynamically adjust the number of columns and image sizes to ensure a uniform grid representation regardless of the user's display window size.

##### My Photos #####

Users are also able to view all of the photos that they themselves have uploaded to flipr. The photos are rendered in a similar fashion as the `/#/explore` page, both using the index function of the `Photos` controller:

```ruby
def index
  puts(params)
  if params[:owner_id]
    @photos = Photo.where(owner_id: params[:owner_id])
  else
    @photos = Photo.all
  end
  render :index
end
```

##### Upload #####

Users are able to upload pictures, which are stored on the Amazon SW3 servers.

Technologies Used
----
#### Front-End ####

* React/Redux
* Webpack
* React-router
* React-dom
* Jquery

#### Back-End ####

* Ruby on Rails
* PostgreSQL
* ActiveStorage in conjunction with Amazon S3

Additional Resources and Future Implementations
----

#### Additional Resources ####

* [Database Schema](https://github.com/hanqingchen15/Flipr/wiki/Database-Schema)
* [Sample State](https://github.com/hanqingchen15/Flipr/wiki/Sample-State)

#### Future Implementations ####

* Ability to comment on other's photos
* Ability to add tags to one's photos
* Search functionalities
