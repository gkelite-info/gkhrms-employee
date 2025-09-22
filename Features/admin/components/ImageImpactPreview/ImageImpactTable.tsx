"use client"
import React from "react"
import IconButton from "../../../../utils/IconButton"
import { Download, Notification, Plus } from "phosphor-react"
import { useImageImpactTableData } from "../../data/image-impact.table.data"
import { useImageImpactPreview } from "../../hooks/imageImpactPreview.hook"
import DataWrapper from "../../../../utils/DataWrapper"
import Table from "../../../../utils/Table/Table"

const ImageImpactTable = () => {
  const { column } = useImageImpactTableData()
  const { imageImpactPreview } = useImageImpactPreview()
  return (
    <div className="w-[70%] h-[402px] flex flex-col gap-2.5">
      <div className="w-full flex flex-wrap gap-2 items-center">
        <IconButton
          className="w-[32.5%] bg-[#874DE6]"
          Icon={Plus}
          label="Add New Changes"
        />
        <IconButton
          Icon={Notification}
          className="w-[32.5%] bg-[#874DE6]"
          label="Add New Changes"
        />
        <IconButton
          className="w-[32.5%] bg-[#874DE6]"
          Icon={Download}
          label="Add New Changes"
        />
      </div>
      <div className="w-full h-[350px] bg-white rounded-lg p-3">
        <div className="w-full h-full overflow-y-scroll">
          <DataWrapper loading={false} error={null} data={imageImpactPreview}>
            <Table
              columns={column}
              data={imageImpactPreview}
              bgColor="#EAEAEA"
              headerTextColor="#000"
              tableItemBg="#F9FAFB"
              // showBorder={true}
            />
          </DataWrapper>
        </div>
      </div>
    </div>
  )
}

export default ImageImpactTable
