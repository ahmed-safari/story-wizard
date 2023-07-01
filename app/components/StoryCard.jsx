import Image from "next/image";
import { useState } from "react";
import { Modal, Button, List, Avatar } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

const StoryCard = ({ story }) => {
  const [showModal, setShowModal] = useState(false);
  const data = [
    {
      title: "Ant Design Title 1",
    },
  ];

  return (
    <>
      <li className="pb-3 sm:pb-4">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <Image
              width={50}
              height={50}
              className="h-16 "
              src={story.imageUrl}
              alt={story.code}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {story.code}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {/* timestamp to formatted time without date */}
              Expiry:{" "}
              {story.expiry
                ? new Date(story.expiry * 1000).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : "No expiry"}
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-white"
            >
              View Metadata
            </button>
          </div>
        </div>
      </li>

      {/* // <!-- Main modal --> */}
      {showModal && (
        <Modal
          bodyStyle={{ overflowY: "auto", maxHeight: "calc(100vh - 200px)" }}
          title="Story Metadata"
          centered
          okButtonProps={{
            style: { backgroundColor: "purple", width: "48%" },
          }}
          cancelButtonProps={{
            style: { width: "48%" },
          }}
          onCancel={() => {
            setShowModal(false);
          }}
          okText="Download Story"
          open={showModal}
        >
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 backdrop-blur-sm justify-center items-center text-center ">
            <div className="px-6 py-6 lg:px-8">
              <Image
                width={150}
                height={150}
                className="h-1/4 mx-auto rounded"
                src={story.imageUrl}
                alt={story.code}
              />
            </div>
            <div className="px-6 py-4">
              {story.mentions.length > 0 && (
                <>
                  <div className="text-xl font-semibold text-gray-800 dark:text-white">
                    Mentions
                  </div>
                  <List
                    itemLayout="horizontal"
                    dataSource={story.mentions}
                    renderItem={(mention) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <Image src={mention.profilePicUrl} width={50} />
                          }
                          title={
                            <a
                              href={"https://instagram.com/" + mention.username}
                            >
                              {mention.username}
                            </a>
                          }
                          //   description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                      </List.Item>
                    )}
                  />
                </>
              )}
              <p className="py-2 text-sm text-gray-700 dark:text-gray-400">
                Description: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed neque elit, tristique quis tempus id, aliquet eget
                nibh. Donec at
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default StoryCard;
