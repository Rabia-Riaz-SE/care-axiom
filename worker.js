const { Worker } = require("bullmq");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// Create a worker with the Redis connection
const worker = new Worker(
  'notification-queue',
  async (job) => {
    console.log('Job workerId : ', job.id);
    console.log('Job worker data body : ', job.data.body);
    console.log('Job worker data email : ', job.data.email);
    await delay(10000); // Wait for 10 seconds

  },
  {
    connection: {
        host: 'localhost', // Redis host
        port: 6379,        // Redis port
        maxRetriesPerRequest: null, 
      }, // Pass the Redis connection to the worker
  }
);

worker.on('completed', (job) => {
  console.log(`Job with id ${job.id} has been completed`);
});

worker.on('failed', (job, err) => {
  console.error(`Job with id ${job.id} failed with error: ${err.message}`);
});