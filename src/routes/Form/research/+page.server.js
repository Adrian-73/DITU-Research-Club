// @ts-nocheck
/** @type {import('./$types').Actions} */
export const actions = {

   default: async (request) => {
      const formData = await request.request.formData();
      const data = Object.fromEntries(formData);

      //const res = await fetch(`https://docs.google.com/forms/d/e/1FAIpQLSffGWWZoTaejEnKCXyzHD44mIZmUbA6oRvt2Ko3_jaysEsYGQ/formResponse?usp=pp_url&entry.1215970052=${data.name}&entry.940412377=${data.phone}&entry.400266531=${data.email}&entry.1739153522=${data.message}&submit=Submit`);
      if (data.IsStudent == "on"){
         console.log("Student");
      }

      console.log(data,"res.status");
      return { success: true };   
   }
 };