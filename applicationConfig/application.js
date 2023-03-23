const primaryApplicationConfig = {
  title: "vue-admin-plus",
  host: "http://127.0.0.1",
  port: "8088",
  logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAArlBMVEUAAAAAaP8AZ/8AZ/8AaP8AZ/8AZ/8AZ/8AZ/8AZv8AW/8AYP8AZ/8AZ//////////8/P8AaP/////7/f9iov8HbP/x9/9/s//t9P+ny/8lff8ad//9/v+jyP+Tv/+OvP9tqP/2+v/T5P8Lb//f7P/Y6P/C2v+21P+dxP+Wwf9Jk/87i//p8f/F3P9mpP9Olv9Dj/8yhv/I3v+w0P9yrP9YnP8Sc/+y0f94r/9npf/OsEnHAAAAEXRSTlMA++qc9dCLWSUjDgjLL+vLm3sQtKUAAAIjSURBVFjDpdfZdtsgEAZgtEey3HbQvkteEq+xna3t+79YT52cCDAIWfy3mE8CxjoM6uM5hq9rIImm+4bjods8GCaMjmk8MNNntgZ3RbNn5HzXgrtjuf38uQ4Tos+/n6/DpOju1/otmBjrcx9smBz7en7adED7f5oGKMRAyDNVANNDDijFGVjBPnldp0GQrl+T/cAafOAmbw6YyKHJgRsfcYuo2ASYSbApuMWEeIcYxpiTOOQdJIKbRBUWpIrgJrfA8hEL87iUAxE9nxUiKZDhwWQy4BlL8ncYKGIZEBeDQIWlqYaAnK6fLmtPpzbr6IrKB4Ca+mXzAdd8NJRbi4EoJRe76wd25NakkRA44z7lDoAQSmLoLAQS3GcLVLbEUCIEnogNKJjzJbbhSQismR8J8LUQiJnXFCwvFgLEaz6DuMaDMUDLAu2dQMMCDVEIY4AFCyyoMTmA90Blz3wT5MBLRBX5CzHUjgJwLfyX5eMAvIm+n7/BRBYwEsCrcHn9TIcrTKYdAph0xyw7dphKuhwE5HkDNWARqQHdBZSAMgQloPwDSkD5BkpAegIOoI0GfhfcC4bOBw6YyfEM/CuOzwfCS70iirq+gOiSZQgAAMjfk21VbZP3fOiq6giA0RdNz1QBTA8hQwUw+uu+CJBf95E9HbD7lmcSYM36pmsKoLt92zcF0Odk43k/YLls68sC8taXbb45gLz5ptr/Xz9/lDQgb///AVxdDy+0jqcwAAAAAElFTkSuQmCC',
  logoBigImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAAAuCAMAAAAC5DUqAAABGlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////9AyjxByTxJ0UD///////////////////////////9ByTv///////////////////////////////////////////////////////////////////////////////////////////9AyTt/23xm1GKD3IBt1WlVz1H+//7F78T7/vvn+OZFykDK8MmJ3oZMzUhJy0Tc9dvY9Ney6bCh5J942XRv1my/7b1i0l5Rzkz2/PXt+u3i9+HT8tKq56dd0Vnx+/CR4I7l9+RCyj5ByTxw1mxr1Wfp+ejGSX7hAAAAN3RSTlMAQzea2TD0v8dUIOw/DIHm2PqA6w3x5qYcFNPQt407Be3jw4JAMyOfh3ldUikYAt6ulW9VzcKyp68+PAAABEdJREFUaN7tmelSGkEQgBcCu1xBCaDBqIln1CTmTg8oy32H2ysmef/XCDPM7gw4dGJYqsTa749TtF29X83FNtocAAePysOlw1V0FZcCV9FVXApcRVcR4/n6GnGEtfXnmsAfNXy67jOiflXRg6PNFT22Y3w6VEi83dvcSE6l4op4teeviGO8sh2Dq2CzGpyuebIhoi/eTEu8UKTiing1bZ04yLrGCAVggkBIrnhoTEY/vJuQUKQiimg1zpqTimsaJRKGKcIRUdAbn44mtxWKIhVRxKoJiKOwmjG4Q8yuGtHvRpN+IaFIRRSRagtUDIWVkxHiqyquiq4cKhRFKqKIVFucYgCUBDTG7ozoqVKRBxFFpNrCFIMwA3bSvZkVPUEUIThLEa+mVqz+OvvZJaST4VwSSjed+cEGFfpZp8jHnOKEog8snnifPvU+Eac5rbYqRROp/dcmcL5IiopUtSJaTa1YydGoWepeAadGyG1zAAC9UocQkgZKvlZmY05WVjywt5dHY3hWgOPXND9w4iz68rP9iLFTDZBUtSJaTa04gF6uUTMHt+1SqQZQL5UapDrS7ufqeei1mFa9NMwDNNh4mKN0ZcUocFhNVhU4UU07soToA6SOd8DGp2mApKoV0WpKxQzANZ1LtjrPAM7p3zZAc/QnWwAzQ7W+E1IsQb5Cx+d396JhrRtRwVo9hqZt8uHH0Qxu6SAwR3sHkFS1IlpNqZgFGHboQFa8gpzl3+CKNNZSK9qbwyvd9WKi3ovoFkjsRuiTI6lqRbSaeqEOR6HCxU9ZscNmduxatxQbAJd03C+MKE8oWlPzVFRI8I90TY6K+1F/Pd43gKSqFdFqasVqo0ej7apQbAGkx8EaDKhWM11u56EgjptrIoE9Z1J4JcRw5zjF/09HUu+vCLMujWLrog9QFooVEy7G+nko2VqFDlMsZ0Z0lYr4QvVYC3X380vNwufMQsUV2eVX6UFbKJI69Nmt0AS4plo3tQLdiWTGXsTPDENEX27F43SFCgxnjhtUsXjTvPxRbJnQlBTPTCiUs+cNgFp1vBerNzAoMsV0llKUFfGT/5gPzW0r+k7MYtSZSwNRZFaQzwP0LyVFUjaBUa8Qftz8ootXXP1pWRG/v712lDv64/Etv8bH97361Sn4LJbrI8GrXJbIiqTV/g35YbNKLEVyAeZ3RBH5SrUBnNgTTyIR+Rhjr/mfUnwzOvMFDj9ubrNdooAvRhSheP+v4TH25h+c/2s4ougU6BsR8vLzDQniL1MPR/Evr8SpcTD8H6/ED0VRtBo8ikaEvs+D+7H7NDZ4ysNQlBtG2+Hp6M6BHYyE52xPCRbWgQMO1mTcnYx+TUnBUGC+JqNgUX1UtN+rbO36Tk6ng/O0ikXhRXXD8a69wL9nrCb1FeNoW3yGd++fcaThdEpyY3PvrXiCxfymscy/Gv0bS/3DmKvoKj4uXMXHwONX/APkQkKQ7lDpngAAAABJRU5ErkJggg==',
  loginImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAArlBMVEUAAAAAaP8AZ/8AZ/8AaP8AZ/8AZ/8AZ/8AZ/8AZv8AW/8AYP8AZ/8AZ//////////8/P8AaP/////7/f9iov8HbP/x9/9/s//t9P+ny/8lff8ad//9/v+jyP+Tv/+OvP9tqP/2+v/T5P8Lb//f7P/Y6P/C2v+21P+dxP+Wwf9Jk/87i//p8f/F3P9mpP9Olv9Dj/8yhv/I3v+w0P9yrP9YnP8Sc/+y0f94r/9npf/OsEnHAAAAEXRSTlMA++qc9dCLWSUjDgjLL+vLm3sQtKUAAAIjSURBVFjDpdfZdtsgEAZgtEey3HbQvkteEq+xna3t+79YT52cCDAIWfy3mE8CxjoM6uM5hq9rIImm+4bjods8GCaMjmk8MNNntgZ3RbNn5HzXgrtjuf38uQ4Tos+/n6/DpOju1/otmBjrcx9smBz7en7adED7f5oGKMRAyDNVANNDDijFGVjBPnldp0GQrl+T/cAafOAmbw6YyKHJgRsfcYuo2ASYSbApuMWEeIcYxpiTOOQdJIKbRBUWpIrgJrfA8hEL87iUAxE9nxUiKZDhwWQy4BlL8ncYKGIZEBeDQIWlqYaAnK6fLmtPpzbr6IrKB4Ca+mXzAdd8NJRbi4EoJRe76wd25NakkRA44z7lDoAQSmLoLAQS3GcLVLbEUCIEnogNKJjzJbbhSQismR8J8LUQiJnXFCwvFgLEaz6DuMaDMUDLAu2dQMMCDVEIY4AFCyyoMTmA90Blz3wT5MBLRBX5CzHUjgJwLfyX5eMAvIm+n7/BRBYwEsCrcHn9TIcrTKYdAph0xyw7dphKuhwE5HkDNWARqQHdBZSAMgQloPwDSkD5BkpAegIOoI0GfhfcC4bOBw6YyfEM/CuOzwfCS70iirq+gOiSZQgAAMjfk21VbZP3fOiq6giA0RdNz1QBTA8hQwUw+uu+CJBf95E9HbD7lmcSYM36pmsKoLt92zcF0Odk43k/YLls68sC8taXbb45gLz5ptr/Xz9/lDQgb///AVxdDy+0jqcwAAAAAElFTkSuQmCC',
  loginDesc: '微前端-中台-设计解决方案',
};

exports.primaryApplicationConfig = primaryApplicationConfig

const loginConfig = {
  name: "admin-plus-login",
  host: "http://127.0.0.1",
  port: "8033",
  container: "#login",
  activeRule: "/login"
};
exports.loginConfig = loginConfig
const appList = [
  {
    name: loginConfig.name,
    entry: `${loginConfig.host}:${loginConfig.port}`,
    container: loginConfig.container,
    activeRule: loginConfig.activeRule,
    parentRouterData: loginConfig.parentRouterData
  },
];
exports.appList = appList
