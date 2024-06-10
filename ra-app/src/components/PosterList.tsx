import {
  Datagrid,
  EditButton,
  ImageField,
  List,
  NumberField,
  ReferenceField,
  TextField,
  useRecordContext,
} from "react-admin";

import { PosterFilterSidebar } from "./FilterList";

const UrlField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  if (!record) return null;

  return (
    <a href={record[source]} target="_blank">
      View
    </a>
  );
};

export const PosterList = () => (
  <List aside={<PosterFilterSidebar />}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="category_id" reference="categories">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
      <NumberField source="width" label="Width (cm)" />
      <NumberField source="height" label="Height (cm)" />
      <NumberField source="price" />
      <ImageField
        source="thumbnail"
        sx={{
          "& img": { maxWidth: 80, maxHeight: 80, objectFit: "contain" },
        }}
      />
      <UrlField source="image" />
      <TextField source="description" />
      <NumberField source="stock" />
      <NumberField source="sales" sx={{ fontWeight: "bold" }} />
      <EditButton />
    </Datagrid>
  </List>
);
