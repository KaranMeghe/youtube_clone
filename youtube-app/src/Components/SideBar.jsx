import { Stack } from "@mui/system";
import { categories } from "../utils/Constants";
const selectedCategory = "New";
const SideBar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: " 95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className="category-btn"
            style={{
              background: category.name === selectedCategory && "#fc1503",
              color: "#fff",
            }}
          >
            <span
              style={{
                color: category.name === selectedCategory ? "#fff" : "#fc1503",
                marginRight: "15px",
              }}
            >
              {category.icon}
            </span>
            <span
              style={{
                opacity: category.name === selectedCategory ? "1" : "0.8",
              }}
            >
              {category.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default SideBar;
