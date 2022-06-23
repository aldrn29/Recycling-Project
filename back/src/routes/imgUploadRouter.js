const imgUploadRouter = require("express").Router();
const loginRequired = require("../middlewares/loginRequired");
const {
  uploadPostImage,
  uploadProfileImage,
} = require("../middlewares/imgUploader.js");

//로그인 필요
imgUploadRouter.use(loginRequired);

//POST /upload/profile-img: 프로필 이미지 추가
imgUploadRouter.post(
  "/profile-img",
  uploadProfileImage.single("image"),
  async (req, res, next) => {
    try {
      //이미지 주소 저장
      const imgUrl = req.file.location;

      const result = { message: "success", data: imgUrl };
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
);

//POST /upload/post-img: 게시글 이미지 추가
imgUploadRouter.post(
  "/post-img",
  //array형태: 여러 개 이미지 저장 가능
  uploadPostImage.array("image"),
  async (req, res, next) => {
    try {
      const files = req.files;
      //이미지 주소 저장
      const imgUrl = files.map((file) => file.location);

      const result = { message: "success", data: imgUrl };
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = imgUploadRouter;
