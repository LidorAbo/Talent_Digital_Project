args = process.argv
dot = '.'
slash = '\\'
path_node_array = (args[args.length - args.length]).split(slash)
framework_name = path_node_array[path_node_array.length -1].split(dot)[path_node_array.length - path_node_array.length]
path_file_array = (args[args.length - 1]).split(slash)
project_file_name = path_file_array[path_file_array.length -1].split(dot)[path_file_array.length - [path_file_array.length]]
namee_fs_package = 'fs'
file_not_found_msg = "No file was found"
var counter = {
    amount : 0
}
const fs_package = require(namee_fs_package)
count = 0;
if (args.length == 2)
    console.log("USAGE: " + framework_name + " " + project_file_name + " " + "[EXT]" + " " + "[TEXT]")
else if (args.length == 3)
    console.log("Error: missing string ")
else {

    dir_files_list_to_check = function (dir, ext, files_list = []) {

        let objects = fs_package.readdirSync(dir);
        files_list = files_list || [];
        objects.forEach(function (file) {
            if (fs_package.statSync(dir + slash + file).isDirectory()) {
                files_list = dir_files_list_to_check(dir + slash + file, ext, files_list);
            }
            else {
                if (file.split(dot)[1] == ext) {
                    files_list.push(dir + slash + file);
                }
            }
        });
        return files_list;
    };
    files_to_check = dir_files_list_to_check(args[1].substr((args[1].length - args[1].length), args[1].lastIndexOf(slash)), args[2])
    if (files_to_check.length ==  0)
        console.log(file_not_found_msg)
    else {
        function check_contents() {


            for (const file of files_to_check) {
                const content = fs_package.readFileSync(file)
                    if (content.toString().indexOf(args[3]) >= 0) {
                        console.log(file)
                        counter.amount++

                    }

                }


            }
        check_contents()
       if (counter.amount == 0 )
            console.log(file_not_found_msg)
	    console.log('Hello Worldd')
        }


}

