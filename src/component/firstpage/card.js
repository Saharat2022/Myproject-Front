import { Button } from "flowbite-react";
import React from "react";

function Card() {
  return (
    <>
      <div className="mt-2 border-red-600 border-2 flex gap-2 justify-between">
        <div className="max-w-xs  border-red-600 border-2">
          <Card
            imgAlt="Math"
            imgSrc="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
          >
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 inline-block">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="flex justify-center gap-3">
              <Button gradientMonochrome="info" size="xs">
                Details
              </Button>
              <Button gradientMonochrome="info" size="xs">
                Delete
              </Button>
            </div>
          </Card>
        </div>
        <div className="max-w-xs  border-red-600 border-2">
          <Card
            imgAlt="Math"
            imgSrc="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
          >
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 inline-block">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="flex justify-center gap-3">
              <Button gradientMonochrome="info" size="xs">
                Details
              </Button>
              <Button gradientMonochrome="info" size="xs">
                Delete
              </Button>
            </div>
          </Card>
        </div>
        <div className="max-w-xs  border-red-600 border-2">
          <Card
            imgAlt="Math"
            imgSrc="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
          >
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 inline-block">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="flex justify-center gap-3">
              <Button gradientMonochrome="info" size="xs">
                Details
              </Button>
              <Button gradientMonochrome="info" size="xs">
                Delete
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Card;
