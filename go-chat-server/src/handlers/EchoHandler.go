package handlers

import (
	"io"
	"golang.org/x/net/websocket"
)

func EchoHandler(ws *websocket.Conn) {
	io.Copy(ws, ws)
}
