import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";


const server = new McpServer({
  name: "weather-mcp-server",
  version: "0.0.1",
  description: "A simple weather MCP server"});

  server.tool("getCurrentWeather", 'Tool to get the weather of a city' , {
    city: z.string().describe("The city to get the weather for")
  },
async ({city}) => {
  // In a real implementation, you would fetch the weather from an API
  // Here, we return a mock response
  return `The current weather in ${city} is sunny with a temperature of 25°C.`;
});

const transport = new StdioServerTransport();
server.connect(transport);