const loginBtn = document.querySelector('.login');
// const code_verifier = '1e03ad4d1d04c58954cbfecae63355d70c6076ee161a60edc7f68a69'
// const code_challenge = 'WaaGH5UJQIQtCcAcN0hppzMsyMPyth3izkJZAXc41Ik='

const code_verifier = 'kiNgBo0-r4GdQld6ShdPoxGq9SheI2m5moxtX-tFce4'
const code_challenge = 'lSEB3zK2TM-X38Baht80CvC4E_a5DnpCG52y5a7dQyk'
const client_id = '196171658902-cat3oaspcoi8qsegu9ovbosc02apbfgh.apps.googleusercontent.com';
const client_secret = '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';
const redirect_uri = 'http://localhost:3000';
const redirectTo = (url) => location.replace(url);

class GoogleOAuthWithCode {
  constructor({ redirectUri, clientId, scope }) {
    this.redirectUri = redirectUri;
    this.clientId = clientId;
    this.scope = scope;
  }

  generateOAuthRequestURL() {
    // create OAuth link to Google
    const baseUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
    baseUrl.search = new URLSearchParams({
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
      response_type: 'code',
      access_type: 'offline',
      scope: this.scope,
      code_challenge: code_verifier,
      code_challenge_method: 'S256',
    });

    return baseUrl.href;
  }

  async exchangeAuthCodeOnToken() {
    const code = new URLSearchParams(location.search).get('code');

    if (!code) return;
    console.log('code: ', code);

    const url = new URL('https://oauth2.googleapis.com/token');
    url.search = new URLSearchParams({
      client_id,
      client_secret,
      code,
      code_verifier,
      grant_type: 'authorization_code',
      redirect_uri,
    });

    const res = await fetch(url.href, {
      method: 'POST',
    })
    const data = await res.json()
    console.log('data: ', data);

    // const { accessToken } = await res.json();

    // localStorage.setItem('customGoogleAccessToken', accessToken);

    // redirectTo('http://localhost:3000');
  }

  refreshToken(accessToken) {
    fetch(`http://localhost:5000/refresh-token?accessToken=${accessToken}`);
  }

  checkAuth() {
    const accessToken = localStorage.getItem('customGoogleAccessToken');
    if (!accessToken) throw new Error('Unautorized');

    fetch(`https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log('Authorized!', data);
      })
      .catch((err) => {
        this.refreshToken(accessToken);
      });
  }
}

const googleAuth = new GoogleOAuthWithCode({
  redirectUri: 'http://localhost:3000',
  clientId: '196171658902-cat3oaspcoi8qsegu9ovbosc02apbfgh.apps.googleusercontent.com',
  scope: 'https://www.googleapis.com/auth/youtube',
});

googleAuth.exchangeAuthCodeOnToken();
// googleAuth.checkAuth();

loginBtn.addEventListener('click', () => {
  redirectTo(googleAuth.generateOAuthRequestURL());
});



// console.log('googleAuth.generateOAuthRequestURL(): ', googleAuth.generateOAuthRequestURL());

// function generateVerifier() {
//   const array = new Uint32Array(28);
//   window.crypto.getRandomValues(array);
//   return Array.from(array, (item) => `0${item.toString(16)}`.substr(-2)).join('');
// }
// console.log('generateVerifier: ', generateVerifier());

// async function generateChallenge(verifier) {
//   function sha256(plain) {
//     const encoder = new TextEncoder();
//     const data = encoder.encode(plain);

//     return window.crypto.subtle.digest('SHA-256', data);
//   }

//   function base64URLEncode(string) {
//     return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
//       .replace(/\+/g, '-')
//       .replace(/\//g, '_')
//       .replace(/=+\$/, '');
//   }

//   const hashed = await sha256(verifier);

//   return base64URLEncode(hashed);
// }

// generateChallenge(verifier).then(resp => {
//   console.log('Response', resp)
// })
