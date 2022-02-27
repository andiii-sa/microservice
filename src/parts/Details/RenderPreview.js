import React from "react";
import YouTube from "react-youtube";

import Accordion, { IconPlay, IconLock, Item } from "src/components/Accordion";
import Modal from "src/components/Modal";

export default function RenderPreview({ previews }) {
  return (
    <>
      <div className="accordion">
        <Accordion>
          {(active, toggle) => {
            return previews?.map((item, index) => {
              return (
                <Item
                  key={`${index}-${item.id}`}
                  id={item.id}
                  name={item.name}
                  child={item.lessons}
                  active={active}
                  toggle={toggle}
                >
                  {item?.lessons?.length > 0 &&
                    item.lessons.map((child, index2) => (
                      <div
                        key={`${index2}-${child.id}`}
                        className="relative hover:bg-gray-200 flex justify-between items-center pl-8 pr-4 py-2"
                      >
                        <span className="text-gray-600">
                          {child?.name ?? "Course name"}
                        </span>
                        {index2 === 0 && (
                          <Modal
                            content={(toggleModal) => (
                              <YouTube
                                videoId={child?.video}
                                id={child?.video}
                                opts={{
                                  playerVars: {
                                    autoplay: 1,
                                    controls: 1,
                                    showinfo: 1,
                                  },
                                }}
                              ></YouTube>
                            )}
                          >
                            {(toggleModal) => (
                              <span
                                className="link-wrapped"
                                onClick={toggleModal}
                              ></span>
                            )}
                          </Modal>
                        )}
                        {index2 === 0 && (
                          <IconPlay
                            className="fill-teal-500"
                            width={20}
                            height={20}
                          ></IconPlay>
                        )}
                        {index2 !== 0 && <IconLock></IconLock>}
                      </div>
                    ))}
                </Item>
              );
            });
          }}
        </Accordion>
      </div>
    </>
  );
}
