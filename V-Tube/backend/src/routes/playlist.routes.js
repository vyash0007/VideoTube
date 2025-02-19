import { Router } from "express"; 
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { addVideoToPlaylist, createPlaylist, deletePlaylist, getPlaylistById, getUserPlaylists, removeVideoFromPlaylist, updatePlaylist } from "../controllers/playlist.controller.js";

const router = Router();
router.use(verifyJWT);

router.route("/").post(upload.single('thumbnail'), createPlaylist);
router.route("/user/:userId").get(getUserPlaylists);
router.route("/add/:videoId/:playlistId").patch(addVideoToPlaylist);
router.route("/remove/:videoId/:playlistId").patch(removeVideoFromPlaylist);

router.route("/:playlistId")
.get(getPlaylistById)
.delete(deletePlaylist)
.patch(updatePlaylist)

export default router;