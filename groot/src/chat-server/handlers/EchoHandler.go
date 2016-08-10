package handlers

import (
	"golang.org/x/net/websocket"
	"io"
)

func EchoHandler(ws *websocket.Conn) {
	io.Copy(ws, ws)
}
