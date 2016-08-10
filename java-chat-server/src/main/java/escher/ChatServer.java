package escher;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.websocket.WebSocketHandler;
import org.eclipse.jetty.websocket.WebSocketFactory;

public class ChatServer {
    public static void main(String[] args) throws Exception {
        Server server = new Server(8080);
        WebSocketHandler wsHandler = new WebSocketHandler() {
            @Override
            public void getWebSocketFactory(WebSocketFactory factory) {
                factory.(Handler.class);
            }
        };
        server.setHandler(wsHandler);
        server.start();
        server.join();
    }
}