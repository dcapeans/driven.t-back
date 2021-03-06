import { Router } from "express";

import * as controller from "@/controllers/client/hotelReservation";

const router = Router();

router.get("/:id", controller.getReservation);

router.post("/hotels/:hotelId/rooms/:roomId", controller.ReserveHotelRoom);

export default router;
