// - ให้ merge Object ทั้ง 4 เข้าด้วยกัน แล้วเก็บไว้ในตัวแปรชื่อ permission 
// - หาก key ซ้ำกันให้ใช้ค่าของตัวแปรที่มีตัวเลขสูงกว่า

const permission1 = { canView: false, canDelete: false };
const permission2 = { canUpdate: true, canCreate: true };
const permission3 = { canCreate: false, canDelete: true };
const permission4 = { canView: true };

const mergePermissions = (...permissions) => {
    const mergedPermission = {};
  
    permissions.forEach((permission, index) => {
      for (const key in permission) {
        if (mergedPermission.hasOwnProperty(key)) {
          const newKey = `${key}_${index + 1}`;
          mergedPermission[newKey] = permission[key];
        } else {
          mergedPermission[key] = permission[key];
        }
      }
    });
  
    return mergedPermission;
  };
  
  const mergedPermissions = mergePermissions(
    permission1,
    permission2,
    permission3,
    permission4
  );
  
  console.log(mergedPermissions);
